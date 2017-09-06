var Backbone = require("backbone")

var ItineraryStop = Backbone.Model.extend({
  defaults: {
    name: null,
    stopId: null,
    agencyId: null,
    stopCode: null,
    lat: null,
    lon: null,
    arrival: null,
    departure: null,
    flagStopArea: null,
    deviatedRouteLon: null,
    deviatedRouteLat: null
  }
})

module.exports = ItineraryStop