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
		city_name    			字符    城市名称
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
		code					整形	 验证码
		
>返回数据：

        success		boolean			true-成功 false-失败
        result      字符串			success为false时的提示信息
        

### 我的基本信息
##### 接口URL http://127.0.0.1/soytime/account/myInfo
>请求方式：POST
>请求参数：
>返回格式：json
>返回数据：

        success		boolean			true-成功 false-失败
        result      区列表 字典：
		{
			timeConf	    	string		时间配置 （数据格式如：12-13-21-52, 需将-分割成数组，十位数表示星期，各位数1表示早上，2表示下午，3表示晚上）
			nickname		string		昵称
			head_img_url	string		头像地址（完整的一个url，无需拼接）
			mobile		整形			手机号
			sex			整形			性别（1：男，2：女，0：未知不显示）
			height					身高
			qq						qq
			email					邮箱
			longitude				精度（可能为null）
			latitude					维度（可能为null）
			city_id 					城市编号
			city_name 				城市名称
			school_id 				学校编号
			school_name 				学校名称
			sutdent_auth 				学生认证状态（0：未认证，1：已认证，2：认证中，3：认证失败）
			explain					审核失败的结果说明
		}
		
### 我被评价的次数和收藏次数统计
##### 接口URL http://127.0.0.1/soytime/appraise/toCount
>请求方式：POST
>请求参数：
>返回格式：json
>返回数据：

        success		boolean			true-成功 false-失败
        result      区列表 字典：
		{
			goodCount		整形		好评数
			cenCount					中评数
			poolCount				差评数
			collectCount				收藏数
		}
