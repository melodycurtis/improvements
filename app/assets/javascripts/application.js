/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}



$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


$('#continue').click(function () { 
  if ($('#state-funded-school').is(':checked')) { location.href = '/prototypes/ur-school/location' }
  if ($('#independent-school').is(':checked')) { location.href = '/prototypes/ur-school/location' }
  if ($('#fe-sixthform').is(':checked')) { location.href = '/prototypes/ur-school/location' }
  if ($('#itp').is(':checked')) { location.href = '/prototypes/ur-school/location' }
  if ($('#he').is(':checked')) { location.href = '/prototypes/ur-school/location' }
  if ($('#la').is(':checked')) { location.href = '/prototypes/ur-school/location' }
  if ($('#careers').is(':checked')) { location.href = '/prototypes/ur-school/location' }
  if ($('#charity').is(':checked')) { location.href = '/prototypes/ur-school/charity' }
  if ($('#other').is(':checked')) { location.href = '/prototypes/ur-school/location' }
  if ($('#other2').is(':checked')) { location.href = '/prototypes/ur-school/location' }

 });


