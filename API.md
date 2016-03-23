#酱油API

#@author lsioui 



### 用户认证信息
##### 接口URL http://127.0.0.1/soytime/ca/caInfo
>请求方式：POST
>请求参数：
>返回格式：json
>返回数据：

        success		boolean			true-成功 false-失败
        result      区列表 字典：
		{
			timeConf    string		时间配置 （数据格式如：12-13-21-52, 需将-分割成数组，十位数表示星期，各位数1表示早上，2表示下午，3表示晚上）

			sceneIds    string 		选择的场景ID（数据格式同timeConf）

			city_id 				城市编号
			city_name 				城市名称
			school_id 				学校编号
			school_name 			学校名称
			auth_head_url 			个人头像
			auth_student_card_url   学生证guid
			sutdent_auth 			学生认证状态（0：未认证，1：已认证，2：认证中，3：认证失败）
			explain					审核失败的结果说明
			
		}





### 获取所有的城市
##### 接口URL http://127.0.0.1/soytime/data/loadCity
>请求方式：POST	</br>
>请求参数：

>返回格式：json	</br>
>返回数据：

        success		boolean			true-成功 false-失败
        result      区列表 字典：
		{
			[
				{
					city_id 		整数		城市编号
					city_name		字符串		城市名称
					first_name		字符串  	首字母
					short_name      字符串      拼音首字母简写
					full_name       字符串      字母全拼
				}
				...
			]
		
		}



### 获取某个城市下的学校列表
##### 接口URL http://127.0.0.1/soytime/data/loadSchool
>请求方式：POST	</br>
>请求参数：
		
		city_id   城市编号
>返回格式：json	</br>
>返回数据：

        success		boolean			true-成功 false-失败
        result      区列表 字典：
		{
			[
				{
					school_id 		整数		学校编号
					school_name		字符串  	学校名称
				}
				...
			]
		
		}


### 上传个人头像，学生证图片
###### 说明：上传图片需要调用微信jsskd来上传到微信服务器，微信返回数据后调用此接口
##### 接口URL http://127.0.0.1/soytime/ca/saveWxImages
>请求方式：POST	</br>
>请求参数：

		serverId	微信返回的服务编号
		picType		图片的类型（1：个人头像，2：学生证）
>返回格式：json	</br>
>返回数据：

        success		boolean			true-成功 false-失败
        result      字符串          返回一个guid的字符串，前端可以拼接以显示图片：http://127.0.0.1/soytime/file/renzheng/XXXX
		

###  申请认证
###### 说明
##### 接口URL http://127.0.0.1/soytime/ca/save
>请求方式：POST	</br>
>请求参数：

		city_id    				整形    城市编号
		city_name    			字符    	城市名称
		school_id  				整形    学校编号
		shcool_name				字符	学校名称
		auth_head				字符	个人头像的guid
  		auth_student_card		字符	哦飞机学生证的guid
		scene_ids				字符	场景id的拼接，格式如：100001-200002	
		account_time_confs		字符	时间配置拼接，格式如：11-22-31-42		
		longitude 				数值	经度
		latitude 				数值 	维度
		workplace				字符 	地图上选中的中文位置信息
		
>返回数据：

        success		boolean			true-成功 false-失败
        result      字符串			提示信息


###  获取手机验证码
###### 说明
##### 接口URL http://127.0.0.1/soytime/message/getMobileCode
>请求方式：POST	</br>
>请求参数：

		mobile    				整形    手机号
		
>返回数据：

        success		boolean			true-成功 false-失败
        result      	字符串			success为false时的提示信息


###  提交手机验证
###### 说明
##### 接口URL http://127.0.0.1/soytime/account/saveMobile
>请求方式：POST	</br>
>请求参数：

		mobile    			整形    手机号
		code				整形	 验证码
		
>返回数据：

        success		boolean			true-成功 false-失败
        result      字符串			success为false时的提示信息
        

#---------------------------------2016 03 20-----------------------------------------


### 我的首页基本信息
##### 接口URL http://127.0.0.1/soytime/account/myInfo
>请求方式：POST
>请求参数：
>返回格式：json
>返回数据：

        success		boolean			true-成功 false-失败
        result      区列表 字典：
		{
			nickname		string		昵称
			head_img_url	string		头像地址（完整的一个url，无需拼接）
			sex				整形		性别（1：男，2：女，0：未知不显示）
			sutdent_auth 				学生认证状态（0：未认证，1：已认证，2：认证中，3：认证失败）
			goodCount		整形		好评数
			cenCount		整形		好评数
			poolCount		整形		差评数
			collectCount	整形		收藏数
		}


### 我的设置信息
##### 接口URL http://127.0.0.1/soytime/account/getSettingInfo
>请求方式：POST
>请求参数：
>返回格式：json
>返回数据：

        success		boolean			true-成功 false-失败
        result      区列表 字典：
		{
			open			整形		时间配置开个（0：关闭，1：开启）
			timeConf	    string		时间配置 （数据格式如：12-13-21-52）
			nickname		string		昵称
			head_img_url	string		头像地址（完整的一个url，无需拼接）
			mobile			整形		手机号
			sex				整形		性别（1：男，2：女，0：未知不显示）
			height						身高
			birthday		时间		生日（格式：yyyy-mm-dd）
			qq							qq
			email						邮箱
		}

### 保存我的设置 
##### 接口URL http://127.0.0.1/soytime/account/saveSetInfo
>请求方式：POST
>请求参数：

		open			整形		时间配置开个（0：关闭，1：开启）
		timeConf	    字符		时间配置 （数据格式如：12-13-21-52）
		nickname		字符		昵称
		sex				整形		性别（1：男，2：女，0：未知不显示）
		height			整形		身高
		birthday		时间		生日（格式：yyyy-mm-dd）
		qq				整形		qq
		email			字符		邮箱

>返回格式：json
>返回数据：

        success		boolean			true-成功 false-失败
        result      String			false时的说明


### 上传图片接口（通用）
###### 说明：上传图片需要调用微信jsskd来上传到微信服务器，微信返回数据后调用此接口
##### 接口URL http://127.0.0.1/soytime/file/uploadImages
>请求方式：POST	</br>
>请求参数：

		serverId	微信返回的服务编号
		picType		图片的类型（1：认证头像，2：学生证, 3：个人图标，4：服务形象照、5：服务图片）
>返回格式：json	</br>
>返回数据：

        success		boolean			true-成功 false-失败
        result      字符串          返回一个url地址


###--------------------发布服务相关-----------------------
### 个人服务信息
###### 说明：
##### 接口URL http://127.0.0.1/soytime/skill/myInfo
>请求方式：POST	</br>
>请求参数：
>返回格式：json	</br>
>返回数据：

        success		boolean			true-成功 false-失败
        result
		{
			photo_url		字符串			形象照片地址（完整地址）
			usernick		字符串			学生昵称
			sceneIds    	字符串			选择的场景ID（eg:12-12-23）
			detail			字符串			个人描述
			skillImgs		数值			服务描述相关图片
			{
				id			整形			图片编号
				img_url		字符串			图片地址
			}
			longitude		数值			精度
			latitude		数值			维度
			workplace		字符串			工作地址
			timeConf		字符串			时间配置(12-21-41-62)		
		}

### 发布个人服务信息
###### 说明：
##### 接口URL http://127.0.0.1/soytime/skill/saveInfo
>请求方式：POST	</br>
>请求参数：

			sceneIds    	字符串			选择的场景ID（eg:12-12-23）
			detail			字符串			个人描述
			skillImgs		数值			服务描述相关图片
			longitude		数值			精度
			latitude		数值			维度
			workplace		字符串			工作地址
			timeConf		字符串			时间配置(12-21-41-62)		

>返回格式：json	</br>
>返回数据：

        success		boolean			true-成功 false-失败
        result		字符串			success为false时，有值


### 查看场景下的学生列表
###### 说明：每页5条记录，默认第一页，上划获取更多时，currentPage要自增
##### 接口URL http://127.0.0.1/soytime/scene/list
>请求方式：POST	</br>
>请求参数：

			currentPage		整数				当前页码
			scene_id    	字符串			学生服务编号
			city_id			整形				当前城市编号
			school_id		整形				学校编号，默认不限（无需传值）
			sex				整形				性别， 默认为不限，无需传值（1：男，2：女）
			sort			整形				排序，默认排序，无需传值（1：评价最高，2：距离最近）
						
>返回格式：json	</br>
>返回数据：

        success		boolean			true-成功 false-失败
        result
		{
			[
				{
					user_id			整形				学生编号	
					usernick		字符串			学生昵称
					sex				整形				性别（1：男，2：女）
					school_name		字符串			学校名称
					head_img_url	字符串			头像地址
					detail			字符串			个人描述
					skillImgs						服务描述相关图片
					{
						img_url		字符串			图片地址
					}
					collectCount    整形				收藏次数
					appraiseCount					评价次数
					viewCount						预览次数
				}
				...
			]
		}


### 查看学生服务信息
###### 说明：
##### 接口URL http://127.0.0.1/soytime/scene/stuInfo
>请求方式：POST	</br>
>请求参数：

			id    	字符串			学生服务编号
		
>返回格式：json	</br>
>返回数据：

        success		boolean			true-成功 false-失败
        result
		{
			photo_url		字符串			形象照片地址（完整地址）
			user_id
			usernick		字符串			学生昵称
			school_name		字符串			学习名称
			sceneIds    	字符串			选择的场景ID（eg:12-12-23）
			detail			字符串			个人描述
			skillImgs		数值			服务描述相关图片
			{
				img_url		字符串			图片地址
			}
			longitude		数值			精度
			latitude		数值			维度
			workplace		字符串			工作地址
			timeConf		字符串			时间配置(12-21-41-62)		
	
			orderAppraise	订单评价		最近一条订单评价
			{
				content			字符串			评价内容
				username		字符串			评价人昵称
				create_time		时间			评价时间
				appraise_count	整形			历史评价次数
			}
		}
		
		
###------------------------------预约------------------------------------------

### 预约/一键下单
###### 说明：
##### 接口URL http://127.0.0.1/soytime/order/doOrder
>请求方式：POST	</br>
>请求参数：

			type			整形			约单类型（1：指定学生预约，2:一键预约）
			user_id    					学生编号
			scene_id					场景编号
			start_time					开始时间（格式：yyyy-MM-dd）
			end_time					结束时间（格式：yyyy-MM-dd）
			period_time		字符串	 	时间段拼接（格式：  HH:mm:ss-HH:mm:ss,HH:mm:ss-HH:mm:ss）
			detail			字符串		需求详情
			salary			数值			薪水
			unit			字符串		单位
			number			证书			预约人数
			pay_way			整形			支付方式(1：酱油平台支付，2：现金支付，3：线上支付)
			comp_addr					公司地址
			comp_longitude				公司经度
			comp_latitude				公司维度
			workplace					工作位置
			work_longitude				工作位置经度
			work_latitude				工作位置维度
			
>返回格式：json	</br>
>返回数据：

        success		boolean			true-成功 false-失败
        result
		{
			order_id  				订单编号
		}
		
### 下单完成，获取预约学生的响应
###### 说明：
##### 接口URL http://127.0.0.1/soytime/order/response
>请求方式：POST	</br>
>请求参数：

			type			整形			约单类型（1：指定学生预约，2:一键预约）
			order_id		整形	 		订单编号
			response_time				响应时间（第一次请求为空值）
			
>返回格式：json	</br>
>返回数据：

        success		boolean			true-成功 false-失败
        result
		{
			order_id  				订单编号
			response_time			响应时间
			[
				{
					user_id
					user_name
					head_img_url
				}
				...
			]
		}


