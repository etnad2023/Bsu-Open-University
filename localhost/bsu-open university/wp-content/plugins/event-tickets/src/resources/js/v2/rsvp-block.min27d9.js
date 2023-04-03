/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

tribe.tickets=tribe.tickets||{},tribe.tickets.rsvp=tribe.tickets.rsvp||{},tribe.tickets.rsvp.block={},function($,obj){const $document=$(document);obj.selectors={container:".tribe-tickets__rsvp-wrapper",rsvpForm:'form[name~="tribe-tickets-rsvp-form"]',goingButton:".tribe-tickets__rsvp-actions-button-going",notGoingButton:".tribe-tickets__rsvp-actions-button-not-going",cancelButton:".tribe-tickets__rsvp-form-button--cancel",errorMessage:".tribe-tickets__form-message--error",hiddenElement:".tribe-common-a11y-hidden",displayToggle:".tribe-tickets__rsvp-actions-success-going-toggle-input"},obj.bindGoing=function($container){let data={};const rsvpId=$container.data("rsvp-id");$container.find(obj.selectors.goingButton).each((function(index,button){$(button).on("click",(function(){data={action:"tribe_tickets_rsvp_handle",ticket_id:rsvpId,step:"going"},tribe.tickets.rsvp.manager.request(data,$container)}))}))},obj.bindNotGoing=function($container){let data={};const rsvpId=$container.data("rsvp-id");$container.find(obj.selectors.notGoingButton).each((function(index,button){$(button).on("click",(function(){data={action:"tribe_tickets_rsvp_handle",ticket_id:rsvpId,step:"not-going"},tribe.tickets.rsvp.manager.request(data,$container)}))}))},obj.bindCancel=function($container){let data={};const rsvpId=$container.data("rsvp-id");$container.find(obj.selectors.cancelButton).each((function(index,button){$(button).on("click",(function(){confirm(TribeRsvp.cancelText)&&(data={action:"tribe_tickets_rsvp_handle",ticket_id:rsvpId,step:null},tribe.tickets.rsvp.manager.request(data,$container))}))}))},obj.handleDisplayToggle=function(event){event.preventDefault();const $input=$(event.target),rsvpId=$input.data("rsvp-id"),checked=$input.prop("checked"),attendeeIds=$input.data("attendee-ids"),nonce=$input.data("opt-in-nonce"),$container=event.data.container,data={action:"tribe_tickets_rsvp_handle",ticket_id:rsvpId,step:"opt-in",opt_in:checked,opt_in_nonce:nonce,attendee_ids:attendeeIds};tribe.tickets.rsvp.manager.request(data,$container)},obj.handleSubmission=function(e){e.preventDefault();const $form=$(this),$container=$form.closest(obj.selectors.container),rsvpId=$form.data("rsvp-id"),params=$form.serializeArray(),data={action:"tribe_tickets_rsvp_handle",ticket_id:rsvpId,step:"success"};$(params).each((function(index,object){data[object.name]=object.value})),tribe.tickets.rsvp.manager.request(data,$container)},obj.bindForm=function($container){$container.find(obj.selectors.rsvpForm).each((function(index,form){$(form).on("submit",obj.handleSubmission)}))},obj.bindDisplayToggle=function($container){$container.find(obj.selectors.displayToggle).on("input",{container:$container},obj.handleDisplayToggle)},obj.unbindEvents=function(event,jqXHR,settings){const $container=event.data.container,$goingButton=$container.find(obj.selectors.goingButton),$notGoingButton=$container.find(obj.selectors.notGoingButton),$cancelButton=$container.find(obj.selectors.cancelButton),$rsvpForm=$container.find(obj.selectors.rsvpForm),$displayToggle=$container.find(obj.selectors.displayToggle);$goingButton.off(),$notGoingButton.off(),$cancelButton.off(),$rsvpForm.off(),$displayToggle.off()},obj.bindEvents=function($container){obj.bindGoing($container),obj.bindNotGoing($container),obj.bindCancel($container),obj.bindForm($container),obj.bindDisplayToggle($container),$container.on("beforeAjaxSuccess.tribeTicketsRsvp",{container:$container},obj.unbindEvents)},obj.init=function(event,index,$container){obj.bindEvents($container)},obj.ready=function(){$document.on("afterSetup.tribeTicketsRsvp",tribe.tickets.rsvp.manager.selectors.container,obj.init)},$(obj.ready)}(jQuery,tribe.tickets.rsvp.block);