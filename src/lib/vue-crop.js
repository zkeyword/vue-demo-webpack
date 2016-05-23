import Vue from 'vue'


  var vueCrop = {}
  var options = {}
  var events = [
    'create',
    'start',
    'move',
    'end',
    'focus',
    'blur',
    'remove'
  ]

	var crop = {

		  acceptStatement: true,

		  bind: function() {
			var event = this.arg

			if ($.inArray(event, events) == -1) {
			  console.warn('Invalid v-crop event: ' + event)
			  return
			}

			if (this.vm.jcrop) return

			var $wrapper = $(this.el).wrap('<div/>').parent()

			$wrapper.width(this.el.width).height(this.el.height)

			this.vm.jcrop = $.Jcrop.attach($wrapper, {
			  setSelect: [25, 25, 250, 250],
			  aspectRatio: 1,
			  bgColor: '#2C7152'
			})
		  },

		  update: function(callback) {
			this.vm.jcrop.container.on('crop' + this.arg, callback)
		  },

		  unbind: function() {
			this.vm.jcrop.container.off('crop' + this.arg)

			if (this._watcher.id != 1) return

			this.vm.jcrop.destroy()
			this.vm.jcrop = null
		  }
	}

  if (window.Vue) {
    window.crop = crop;
    Vue.use(install);
  }

  function install(Vue) {
    Vue.directive('crop', crop);
  }

  exports.install = install;
  exports.crop = crop;
