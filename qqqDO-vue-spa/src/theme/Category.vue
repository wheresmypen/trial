<template>
  <div>
    <div
    v-for="(post, number) in posts"
    v-bind:key="post.number">
      <app-post>
        <h3 slot="title">{{ post.address }} <span>{{message.text}}</span></h3>
        <span slot="content">${{ post.totalValue }} CASE #{{ post.number}}</span>
      </app-post>
    </div>
  </div>
</template>
<script>
  import Post from './Post.vue'
  // main.js
  var greetings = require("../util/APIcall.js");
  var pathOne = 'http://52.14.168.26:8081/api/security/login'
  var pathTwo = 'http://52.14.168.26:8081/api/admin/city/add/'
  var data = new Object()
  data.area = 'boulder'
  data.permits = ['https://www-static.bouldercolorado.gov/docs/opendata/2017_Construction_Permits.csv']
  data.geo = ['https://www-static.bouldercolorado.gov/docs/opendata/DevelopmentReview.GeoJSON']

  var promise = greetings.APItoken(pathOne, 'admin', 'password', 'ADMIN')

  var postCity = function(url, token, data){
    var dataCall = greetings.APIpost(url, token, data)
    dataCall.done(function(response){
      console.log(response)
      return response
    })
  }
  var token = promise.done(function(response){
    console.log('T: ' + response)
    postCity(pathTwo, response, data)
    return response
  })

  export default {
    components: {
      'app-post': Post
    },
    data () {
      return {
        message:
          {
            'text': token
          },
        posts:
          [
            {
              "newCase": false,
              "reportable": true,
              "number": "PMT2017-01869",
              "address": "1136 ALPINE AV",
              "assesorId": "0000925",
              "status": "REV",
              "category": "NonResidential",
              "usesAndscopes": [
                "Government Uses",
                " Tenant Remodel"
              ],
              "permitTypes": [
                "Building",
                " Electrical",
                " Mechanical",
                " Plumbing"
              ],
              "totalValue": 4095854,
              "subPermitValue": 1780510,
              "applied": "05/04/2017",
              "approved": "07/18/2017",
              "issued": "07/24/2017",
              "newUnits": 0,
              "reUnits": 0,
              "affordableUnits": 0,
              "newSquareFeet": 0,
              "reSquareFeet": 21747,
              "description": "Interior tenant remodel. Scope includes remodel of all 4 levels of building, removal of interior partition walls, all new finishes, plumbing fixtures (decreasing number of fixtures). Structural changes include new stairwell openings and new accessible ramp. Exterior changes limited to exterior ramp, removal of small addition, and new main entry doorway in existing opening. Includes associated MEP. Associated with ADR2017-00142 (sitework deferral) and ADR2017-00143 (front setback variance).",
              "primaryFirst": "",
              "primaryLast": "AMERESCO INC",
              "primaryCompany": "AMERESCO INC",
              "contractorFirst": "",
              "contractorLast": "AMERESCO INC",
              "contractorCompany": "AMERESCO INC",
              "owner1First": "OF",
              "owner1Last": "CITY",
              "owner1Company": "",
              "owner2First": "",
              "owner2Last": "",
              "owner2Company": ""
            },
            {
              "newCase": false,
              "reportable": true,
              "number": "PMT2017-01876",
              "address": "1755 VIEW POINT RD",
              "assesorId": "0013168",
              "status": "REV",
              "category": "Residential",
              "usesAndscopes": [
                "Single Family Detached Dwelling",
                " New"
              ],
              "permitTypes": [
                "Building",
                " Electrical",
                " Mechanical",
                " Plumbing",
                " Water",
                " Wastewater"
              ],
              "totalValue": 2365115,
              "subPermitValue": 265115,
              "applied": "05/04/2017",
              "newUnits": 1,
              "reUnits": 0,
              "affordableUnits": 0,
              "newSquareFeet": 6057,
              "reSquareFeet": 0,
              "description": "New single story single family dwelling over walkout level basement and attached garage. Lower level to include three bedroom suites, a laundry/mudroom, mechanical room, and playroom.  Main level to include master suite, another bedroom suite, entry, kitchen, dining and gathering rooms.",
              "primaryFirst": "",
              "primaryLast": "MOSAIC ARCHITECTS",
              "primaryCompany": "MOSAIC ARCHITECTS",
              "contractorFirst": "",
              "contractorLast": "TREELINE HOMES INC",
              "contractorCompany": "TREELINE HOMES INC",
              "owner1First": "HAGIT",
              "owner1Last": "MEI-DAN",
              "owner1Company": "",
              "owner2First": "",
              "owner2Last": "MEI-DAN",
              "owner2Company": ""
            },
            {
              "newCase": false,
              "reportable": true,
              "number": "PMT2017-00277",
              "address": "350 LINDEN AV",
              "assesorId": "0510367",
              "status": "ISS",
              "category": "Residential",
              "usesAndscopes": [
                "Single Family Detached Dwelling",
                " New",
                " Garage - Attached",
                " New"
              ],
              "permitTypes": [
                "Building",
                " Electrical",
                " Mechanical",
                " Plumbing",
                " Fire",
                " Water",
                " Wastewater",
                " Woodstove"
              ],
              "totalValue": 2285000,
              "subPermitValue": 250000,
              "applied": "01/26/2017",
              "approved": "04/24/2017",
              "issued": "05/17/2017",
              "newUnits": 1,
              "reUnits": 0,
              "affordableUnits": 0,
              "newSquareFeet": 7163,
              "reSquareFeet": 0,
              "description": "New two story single family dwelling above basement with attached garage. Lower level includes rec rooms and a guest suite, on the north end, and a bedroom and flex room on the south end.  The main level includes a central area, including the kitchen, dining, and gathering rooms.  This is connected to the north wing (master suite) by the entry, and is connected to the south wing (guest studio) by the mudroom and laundry. The upper level above the north wing includes two additional bedroom suites. Scope also includes front and rear covered porches.",
              "primaryFirst": "",
              "primaryLast": "HARRINGTON STANKO CONSTRUCTION",
              "primaryCompany": "HARRINGTON STANKO CONSTRUCTION",
              "contractorFirst": "",
              "contractorLast": "HARRINGTON STANKO CONSTRUCTION",
              "contractorCompany": "HARRINGTON STANKO CONSTRUCTION",
              "owner1First": "CHRISTOPHE",
              "owner1Last": "CARRIGAN",
              "owner1Company": "",
              "owner2First": "CORRIE",
              "owner2Last": "CARRIGAN",
              "owner2Company": ""
            },
            {
              "newCase": false,
              "reportable": true,
              "number": "PMT2017-02555",
              "address": "2960 DIAGONAL HW",
              "assesorId": "0015791",
              "status": "DEN",
              "category": "NonResidential",
              "usesAndscopes": [
                "Financial Institution",
                " Tenant Remodel"
              ],
              "permitTypes": [
                "Building",
                " Electrical",
                " Mechanical",
                " Plumbing"
              ],
              "totalValue": 2238694,
              "subPermitValue": 1148661,
              "applied": "06/13/2017",
              "newUnits": 0,
              "reUnits": 0,
              "affordableUnits": 0,
              "newSquareFeet": 0,
              "reSquareFeet": 15200,
              "description": "Tenant Remodel - Elevations Credit Union - Tenant remodel of 15,200 sf of existing office space. Remodel to include framing, drywall, interior and exterior finishes. Associated MEPfoots covered within the scope of this permit, including replacing the lighting fixtures, replacing the heating and cooling systems and installing a residential hood system in the kitchenette, and replacement sewer, water piping and adding plumbing fixtures. ",
              "primaryFirst": "",
              "primaryLast": "THE NEENAN COMPANY, LLLP",
              "primaryCompany": "THE NEENAN COMPANY, LLLP",
              "contractorFirst": "",
              "contractorLast": "THE NEENAN COMPANY, LLLP",
              "contractorCompany": "THE NEENAN COMPANY, LLLP",
              "owner1First": "OF",
              "owner1Last": "U",
              "owner1Company": "",
              "owner2First": "",
              "owner2Last": "",
              "owner2Company": ""
            },
            {
              "newCase": false,
              "reportable": true,
              "number": "PMT2017-03442",
              "address": "890 WILLOWBROOK RD",
              "assesorId": "0000949",
              "status": "DEN",
              "category": "Residential",
              "usesAndscopes": [
                "Single Family Detached Dwelling",
                " New"
              ],
              "permitTypes": [
                "Building",
                " Electrical",
                " Mechanical",
                " Plumbing"
              ],
              "totalValue": 1972000,
              "subPermitValue": 172000,
              "applied": "08/11/2017",
              "newUnits": 1,
              "reUnits": 0,
              "affordableUnits": 0,
              "newSquareFeet": 6230,
              "reSquareFeet": 0,
              "description": "New single family residence with finished walkout basement and 2-car garage, approximately 5216 sf with attached garage of approximately 590 sf, exterior deck (located primarily over living space) and porch areas, approximately 424 sf.",
              "primaryFirst": "",
              "primaryLast": "SOPHER SPARN",
              "primaryCompany": "SOPHER SPARN",
              "contractorFirst": "",
              "contractorLast": "HARRINGTON STANKO CONSTRUCTION",
              "contractorCompany": "HARRINGTON STANKO CONSTRUCTION",
              "owner1First": "ELLIOTT",
              "owner1Last": "BOUILLION",
              "owner1Company": "",
              "owner2First": "JUDITH",
              "owner2Last": "BOUILLION",
              "owner2Company": ""
            },
            {
              "newCase": false,
              "reportable": true,
              "number": "PMT2017-01759",
              "address": "3600 TABLE MESA DR",
              "assesorId": "0106253",
              "status": "REV",
              "category": "NonResidential",
              "usesAndscopes": [
                "Commercial/Retail",
                " Tenant Remodel"
              ],
              "permitTypes": [
                "Building",
                " Electrical",
                " Mechanical",
                " Plumbing"
              ],
              "totalValue": 1932413,
              "subPermitValue": 614764,
              "applied": "04/28/2017",
              "approved": "08/20/2017",
              "issued": "08/21/2017",
              "newUnits": 0,
              "reUnits": 0,
              "affordableUnits": 0,
              "newSquareFeet": 0,
              "reSquareFeet": 2825,
              "description": "King Soopers tenant remodel.  Exterior work to include replacement of light fixtures modifications to the south side of the King Soopers building, including new guard rails and replacement of the existing trash compactor and dock door with a new trash compactor and door, reference ADR2017-00037.  Scope also includes associated mechanical, electrical, and plumbing. *9/12/2017 Scope updated to include a new 384 sf room at the front/north of the store.  ",
              "primaryFirst": "",
              "primaryLast": "MARK YOUNG CONSTRUCTION, INC",
              "primaryCompany": "MARK YOUNG CONSTRUCTION, INC",
              "contractorFirst": "",
              "contractorLast": "MARK YOUNG CONSTRUCTION, INC",
              "contractorCompany": "MARK YOUNG CONSTRUCTION, INC",
              "owner1First": "TABLE",
              "owner1Last": "ADLP",
              "owner1Company": "",
              "owner2First": "",
              "owner2Last": "",
              "owner2Company": ""
            },
            {
              "newCase": false,
              "reportable": true,
              "number": "PMT2017-03490",
              "address": "4801 RIVERBEND RD",
              "assesorId": "0094649",
              "status": "REV",
              "category": "NonResidential",
              "usesAndscopes": [
                "Medical and Dental Clinics",
                " Tenant Finish"
              ],
              "permitTypes": [
                "Building",
                " Electrical",
                " Mechanical",
                " Plumbing"
              ],
              "totalValue": 1824089,
              "subPermitValue": 1090190,
              "applied": "08/15/2017",
              "newUnits": 0,
              "reUnits": 0,
              "affordableUnits": 0,
              "newSquareFeet": 10673,
              "reSquareFeet": 0,
              "description": "Initial tenant finish of 10,673 sf medical dental office space for the new Riverbend Rd. campus of Boulder Community Health. Scope includes electrical, mechanical and plumbing work. ",
              "primaryFirst": "",
              "primaryLast": "BOULDER ASSOCIATES, P.C.",
              "primaryCompany": "BOULDER ASSOCIATES, P.C.",
              "contractorFirst": "",
              "contractorLast": "WYATT CONSTRUCTION CO, INC",
              "contractorCompany": "WYATT CONSTRUCTION CO, INC",
              "owner1First": "HOSPITAL",
              "owner1Last": "COMMUNITY",
              "owner1Company": "",
              "owner2First": "",
              "owner2Last": "",
              "owner2Company": ""
            },
            {
              "newCase": false,
              "reportable": true,
              "number": "PMT2017-01629",
              "address": "3633 BROADWAY",
              "assesorId": "0606738",
              "status": "ISS",
              "category": "Residential",
              "usesAndscopes": [
                "Single Family Detached Dwelling",
                " New",
                " Garage - Attached",
                " New"
              ],
              "permitTypes": [
                "Building",
                " Electrical",
                " Mechanical",
                " Plumbing",
                " Water",
                " Wastewater"
              ],
              "totalValue": 1800000,
              "subPermitValue": 205000,
              "applied": "04/20/2017",
              "approved": "07/27/2017",
              "issued": "08/08/2017",
              "newUnits": 1,
              "reUnits": 0,
              "affordableUnits": 0,
              "newSquareFeet": 4027,
              "reSquareFeet": 0,
              "description": "New two-story single family dwelling.  First floor 1,187 s.f. finished with kitchen, living, dining, and 106 s.f. unfinished mechanical room.  Second floor 1,837 s.f. finished with master, junior master, guest bedroom, media room, laundry, and 3/4 bath.  Covered patio on south side of residence and two walkout decks off the second floor.  Attached 650 s.f. unconditioned garage.  Scope to include associated mechanical, electrical, and plumbing.",
              "primaryFirst": "",
              "primaryLast": "SKYCASTLE HOMES, LLC",
              "primaryCompany": "SKYCASTLE HOMES, LLC",
              "contractorFirst": "",
              "contractorLast": "SKYCASTLE HOMES, LLC",
              "contractorCompany": "SKYCASTLE HOMES, LLC",
              "owner1First": "THOMAS",
              "owner1Last": "FLAHERTY",
              "owner1Company": "",
              "owner2First": "",
              "owner2Last": "",
              "owner2Company": ""
            },
            {
              "newCase": false,
              "reportable": true,
              "number": "PMT2017-04034",
              "address": "2500 ARAPAHOE AV",
              "assesorId": "0604754",
              "status": "ACT",
              "category": "NonResidential",
              "usesAndscopes": [
                "Commercial/Retail",
                " Remodel"
              ],
              "permitTypes": [
                "Building",
                " Electrical"
              ],
              "totalValue": 1738800,
              "subPermitValue": 100000,
              "applied": "09/19/2017",
              "newUnits": 0,
              "reUnits": 0,
              "affordableUnits": 0,
              "newSquareFeet": 0,
              "reSquareFeet": 30000,
              "description": "Exterior remodel of existing Arapahoe Village shopping center to include facade, pedestrian circulation, landscape and lighting improvements. No floor area changes proposed. Reference ADR2017-00017 for Minor Mod., ADR2017-00018 for Parking Reduction, and LUR2017-00024 for Floodplain Development Permit.",
              "primaryFirst": "LEONARD",
              "primaryLast": "THOMAS",
              "primaryCompany": "URBAN WEST STUDIOS",
              "contractorFirst": "",
              "contractorLast": "",
              "contractorCompany": "",
              "owner1First": "CO-ARAPAHO",
              "owner1Last": "FW",
              "owner1Company": "",
              "owner2First": "",
              "owner2Last": "",
              "owner2Company": ""
            },
            {
              "newCase": false,
              "reportable": true,
              "number": "PMT2017-00594",
              "address": "3170 BROADWAY",
              "assesorId": "0085003",
              "status": "ISS",
              "category": "NonResidential",
              "usesAndscopes": [
                "Government Uses",
                " Repair"
              ],
              "permitTypes": [
                "Building",
                " Electrical",
                " Mechanical",
                " Plumbing"
              ],
              "totalValue": 1701889,
              "subPermitValue": 40243,
              "applied": "02/17/2017",
              "approved": "08/10/2017",
              "issued": "08/17/2017",
              "newUnits": 0,
              "reUnits": 0,
              "affordableUnits": 0,
              "newSquareFeet": 0,
              "reSquareFeet": 0,
              "description": "Permit for interior renovations and moisture mitigation at the North Boulder Recreation Center. Scope includes installation of new recreational and mechanical pool equiopment, removal of existing solar thermal units and associated piping, re-roofing, and new interior finishes.",
              "primaryFirst": "",
              "primaryLast": "WHITESTONE CONST SERVICES",
              "primaryCompany": "WHITESTONE CONST SERVICES",
              "contractorFirst": "",
              "contractorLast": "WHITESTONE CONST SERVICES",
              "contractorCompany": "WHITESTONE CONST SERVICES",
              "owner1First": "OF",
              "owner1Last": "CITY",
              "owner1Company": "",
              "owner2First": "",
              "owner2Last": "",
              "owner2Company": ""
            },
            {
              "newCase": false,
              "reportable": true,
              "number": "PMT2017-01811",
              "address": "405 HAWTHORN AV",
              "assesorId": "0007215",
              "status": "ISS",
              "category": "Residential",
              "usesAndscopes": [
                "Single Family Detached Dwelling",
                " New",
                " Garage - Attached",
                " New"
              ],
              "permitTypes": [
                "Building",
                " Electrical",
                " Mechanical",
                " Plumbing",
                " Water",
                " Wastewater"
              ],
              "totalValue": 1685000,
              "subPermitValue": 185000,
              "applied": "05/02/2017",
              "approved": "08/17/2017",
              "newUnits": 1,
              "reUnits": 0,
              "affordableUnits": 0,
              "newSquareFeet": 5514,
              "reSquareFeet": 0,
              "description": "New two-story single family home with walk-out basement and attached garage.  Scope includes associated mechanical, electrical, and plumbing.  ",
              "primaryFirst": "",
              "primaryLast": "MORNINGSTAR HOMES",
              "primaryCompany": "MORNINGSTAR HOMES",
              "contractorFirst": "",
              "contractorLast": "MORNINGSTAR HOMES",
              "contractorCompany": "MORNINGSTAR HOMES",
              "owner1First": "LLC",
              "owner1Last": "BL2017",
              "owner1Company": "",
              "owner2First": "",
              "owner2Last": "",
              "owner2Company": ""
          }
        ]
      }
    }
  }
</script>
