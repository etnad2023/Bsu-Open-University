/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

tribe.tickets=tribe.tickets||{},tribe.tickets.rsvp=tribe.tickets.rsvp||{},tribe.tickets.rsvp.manager={},function($,_,obj){obj.selectors={container:".tribe-tickets__rsvp-wrapper",loader:".tribe-common-c-loader",hiddenElement:".tribe-common-a11y-hidden",messageError:".tribe-tickets__rsvp-message--error"},obj.currentAjaxRequest=null,obj.$containers=$(),obj.selectContainers=function(){obj.$containers=$(obj.selectors.container)},obj.cleanup=function(container){const $container=$(container);$container.trigger("beforeCleanup.tribeTicketsRsvp",[$container]),$container.trigger("afterCleanup.tribeTicketsRsvp",[$container])},obj.setup=function(index,container){const $container=$(container);$container.trigger("beforeSetup.tribeTicketsRsvp",[index,$container]),$container.trigger("afterSetup.tribeTicketsRsvp",[index,$container])},obj.request=function(data,$container){const settings=obj.getAjaxSettings($container);settings.data=data,obj.currentAjaxRequest=$.ajax(settings)},obj.getAjaxSettings=function($container){return{url:TribeRsvp.ajaxurl,method:"POST",beforeSend:obj.ajaxBeforeSend,complete:obj.ajaxComplete,success:obj.ajaxSuccess,error:obj.ajaxError,context:$container}},obj.ajaxBeforeSend=function(jqXHR,settings){this.trigger("beforeAjaxBeforeSend.tribeTicketsRsvp",[jqXHR,settings]),tribe.tickets.loader.show(this),this.trigger("afterAjaxBeforeSend.tribeTicketsRsvp",[jqXHR,settings])},obj.ajaxComplete=function(jqXHR,textStatus){this.trigger("beforeAjaxComplete.tribeTicketsRsvp",[jqXHR,textStatus]),tribe.tickets.loader.hide(this),this.trigger("afterAjaxComplete.tribeTicketsRsvp",[jqXHR,textStatus]),obj.currentAjaxRequest=null},obj.ajaxSuccess=function(response,textStatus,jqXHR){const $container=this,$html=response.data.html;response.success?($container.trigger("beforeAjaxSuccess.tribeTicketsRsvp",[response,textStatus,jqXHR]),obj.cleanup($container),$container.html($html),obj.setup(0,$container),obj.selectContainers(),$container.trigger("afterAjaxSuccess.tribeTicketsRsvp",[response,textStatus,jqXHR])):$container.find(obj.selectors.messageError).length||$container.prepend($html)},obj.ajaxError=function(jqXHR,settings){this.trigger("beforeAjaxError.tribeTicketsRsvp",[jqXHR,settings]),this.trigger("afterAjaxError.tribeTicketsRsvp",[jqXHR,settings])},obj.ready=function(){obj.selectContainers(),obj.$containers.each(obj.setup)},$(obj.ready)}(jQuery,window.underscore||window._,tribe.tickets.rsvp.manager);