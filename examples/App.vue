<template>
  <div id="app">
    <h1>Vue-Paginate v3.0</h1>
    <paginate name="items" :list="items" ref="paginator" class="paginate-list" :refreshCurrentPage="false" :refreshKey="'name'" :per=8>
      <li v-for="item in paginated('items')">
        {{ item.name }}
      </li>
    </paginate>
    <paginate-links for="items"
      :show-step-links="true"
    ></paginate-links>
    <paginate-links for="items"
      :show-step-links="true"
      :limit="2"
      :step-links="{
        next: 'N',
        prev: 'P'
      }"
    ></paginate-links>
    <paginate-links for="items" :simple="{
      next: 'Next »',
      prev: '« Back'
    }"></paginate-links>
    <span v-if="$refs.paginator">
      Viewing {{$refs.paginator.pageItemsCount}} results
    </span>
    <div v-on:click="update">Update</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // items: ['Item One', 'Item Two', 'Item Three', 'Item Four', 'Item Five', 'Item Six', 'Item Seven', 'Item Eight', 'Item Nine', 'Item Ten', 'Item Eleven', 'Item Twelve', 'Item Thirteen'],
      items: [ { "amenity_id": "ea2a12e8-d1a8-4002-a2c1-a02e3f6d367b", "detailed_category": "Fitness", "display": true, "display_name": "Fitness Center", "filter_param": "has_fitness_center", "frequency": 0.499, "general_category": "Building", "impact": 33, "included": true, "is_characteristic": false, "name": "building__has_fitness_center", "p-value": 0, "type": "Amenities" }, { "amenity_id": "80229a68-35b6-4784-83c2-68348b8d16a9", "detailed_category": "Pets", "display": true, "display_name": "Pets Allowed", "filter_param": "has_pets_allowed", "frequency": 0.434, "general_category": "Building", "impact": 24, "included": true, "is_characteristic": false, "name": "building__has_pets_allowed", "p-value": 0, "type": "Amenities" }, { "amenity_id": "9ca61337-7565-4494-ad6e-e5b1c5c54407", "detailed_category": "Community Amenities", "display": true, "display_name": "Pool", "filter_param": "has_pool", "frequency": 0.344, "general_category": "Building", "impact": 5, "included": true, "is_characteristic": false, "name": "building__has_pool", "p-value": 0, "type": "Amenities" }, { "amenity_id": "1e8f83d5-411f-4100-9e36-13c3b5021107", "detailed_category": "Community Amenities", "display": true, "display_name": "Roof Deck", "filter_param": "has_roof_deck", "frequency": 0.209, "general_category": "Building", "impact": 3, "included": false, "is_characteristic": false, "name": "building__has_roof_deck", "p-value": 0, "type": "Amenities" }, { "amenity_id": "72109196-5f25-4c1b-aef4-9b11125769bd", "detailed_category": "Community Amenities", "display": true, "display_name": "Business Center", "filter_param": "has_business_center", "frequency": 0.204, "general_category": "Building", "impact": 5, "included": true, "is_characteristic": false, "name": "building__has_business_center", "p-value": 0, "type": "Amenities" }, { "amenity_id": "782a4b60-d398-46bc-a7f3-de0bea97c9c6", "detailed_category": "Community Amenities", "display": true, "display_name": "Lounge", "filter_param": "has_lounge", "frequency": 0.18, "general_category": "Building", "impact": 8, "included": true, "is_characteristic": false, "name": "building__has_lounge", "p-value": 0, "type": "Amenities" }, { "amenity_id": "6c0cc4d1-eca1-4743-ae39-23a117f9c31b", "detailed_category": "Building Height", "display": true, "display_name": "Elevator Building", "filter_param": "has_elevator", "frequency": 0.173, "general_category": "Building", "impact": 32, "included": true, "is_characteristic": true, "name": "building__has_elevator", "p-value": 0.004, "type": "Characteristics" }, { "amenity_id": "4e0cf2c2-6113-4b5e-bcf4-349f4ab0782b", "detailed_category": "Parking", "display": true, "display_name": "Parking Garage", "filter_param": "has_parking_garage", "frequency": 0.136, "general_category": "Building", "impact": 14, "included": false, "is_characteristic": false, "name": "building__has_parking_garage", "p-value": 0.014, "type": "Amenities" }, { "amenity_id": "34a486c9-221f-4d6f-a08b-bf0378a9e8ff", "detailed_category": "Community Amenities", "display": true, "display_name": "Club House", "filter_param": "has_club_house", "frequency": 0.107, "general_category": "Building", "impact": 6, "included": false, "is_characteristic": false, "name": "building__has_club_house", "p-value": 0, "type": "Amenities" }, { "amenity_id": "c4f4eef0-5551-497e-b98d-c02dad3377d4", "detailed_category": "Management Services", "display": true, "display_name": "Concierge", "filter_param": "has_concierge", "frequency": 0.104, "general_category": "Building", "impact": 14, "included": false, "is_characteristic": false, "name": "building__has_concierge", "p-value": 0, "type": "Amenities" }, { "amenity_id": "03a6089e-edb7-4dad-be7c-17588c37077b", "detailed_category": "Community Amenities", "display": true, "display_name": "Hot Tub", "filter_param": "has_hot_tub", "frequency": 0.104, "general_category": "Building", "impact": 7, "included": true, "is_characteristic": false, "name": "building__has_hot_tub", "p-value": 0, "type": "Amenities" }, { "amenity_id": "e50c7149-5930-4412-946e-10ef98fef35c", "detailed_category": "Pets", "display": true, "display_name": "Pet Park / Dog Run", "filter_param": "has_pet_park", "frequency": 0.101, "general_category": "Building", "impact": 55, "included": true, "is_characteristic": false, "name": "building__has_pet_park", "p-value": 0, "type": "Amenities" }, { "amenity_id": "13d4dcab-34be-48df-bb98-2949d67d9e83", "detailed_category": "Community Amenities", "display": true, "display_name": "Conference Room", "filter_param": "has_conference_room", "frequency": 0.073, "general_category": "Building", "impact": 6, "included": false, "is_characteristic": false, "name": "building__has_conference_room", "p-value": 0, "type": "Amenities" }, { "amenity_id": "b24c02ad-c12d-4c8e-a181-aaf1fdac841d", "detailed_category": "Community Amenities", "display": true, "display_name": "Fire Pit", "filter_param": "has_fire_pit", "frequency": 0.072, "general_category": "Building", "impact": 10, "included": true, "is_characteristic": false, "name": "building__has_fire_pit", "p-value": 0, "type": "Amenities" }, { "amenity_id": "babd74fa-4c74-4f7b-9356-4abc5d4b7772", "detailed_category": "Community Amenities", "display": true, "display_name": "Movie Theater", "filter_param": "has_movie_theater", "frequency": 0.065, "general_category": "Building", "impact": 5, "included": false, "is_characteristic": false, "name": "building__has_movie_theater", "p-value": 0, "type": "Amenities" }, { "amenity_id": "e698c9c4-89a4-40ec-89e4-e91067bcb4ea", "detailed_category": "Fitness", "display": true, "display_name": "24hr Fitness Center", "filter_param": "has_24_hour_fitness_center", "frequency": 0.047, "general_category": "Building", "impact": 26, "included": true, "is_characteristic": false, "name": "building__has_24_hour_fitness_center", "p-value": 0.002, "type": "Amenities" }, { "amenity_id": "70294735-f158-4d75-934f-792ffe8d9e47", "detailed_category": "New Construction Status", "display": true, "display_name": "New Construction", "filter_param": "has_new_construction", "frequency": 0.032, "general_category": "Building", "impact": 163, "included": false, "is_characteristic": true, "name": "building__has_new_construction", "p-value": 0, "type": "Characteristics" }, { "amenity_id": "f9a11c7a-734e-4e4e-87b0-e6656ef09885", "detailed_category": "Management Services", "display": true, "display_name": "24Hr Concierge", "filter_param": "has_24_hour_concierge", "frequency": 0.029, "general_category": "Building", "impact": 10, "included": true, "is_characteristic": false, "name": "building__has_24_hour_concierge", "p-value": 0, "type": "Amenities" }, { "amenity_id": "16cfad2b-415b-4f47-a43c-e780cca0df15", "detailed_category": "Energy Efficiency", "display": true, "display_name": "Leed Certified", "filter_param": "has_leed_certified", "frequency": 0.025, "general_category": "Building", "impact": 188, "included": false, "is_characteristic": true, "name": "building__has_leed_certified", "p-value": 0, "type": "Characteristics" }, { "amenity_id": "1f4e1473-245e-4be5-833f-926ee505ac00", "detailed_category": "Management Services", "display": true, "display_name": "Dry Cleaning Lockers", "filter_param": "has_dry_cleaning_lockers", "frequency": 0.024, "general_category": "Building", "impact": 15, "included": false, "is_characteristic": false, "name": "building__has_dry_cleaning_lockers", "p-value": 0, "type": "Amenities" }, { "amenity_id": "3ed63f32-1d35-4cde-8273-45909936c681", "detailed_category": "Parking", "display": true, "display_name": "Car Charging Stations", "filter_param": "has_car_charging", "frequency": 0.021, "general_category": "Building", "impact": 31, "included": false, "is_characteristic": false, "name": "building__has_car_charging", "p-value": 0.006, "type": "Amenities" }, { "amenity_id": "45ebfe73-5666-42d8-a55b-4639a2d52473", "detailed_category": "Community Amenities", "display": true, "display_name": "Game Room", "filter_param": "has_game_room", "frequency": 0.02, "general_category": "Building", "impact": 4, "included": true, "is_characteristic": false, "name": "building__has_game_room", "p-value": 0.002, "type": "Amenities" } ],
      paginate: ['items']
    }
  },
  methods: {
    update: function () {
      // this.items = ['Item One', 'Item Two', 'Item Three', 'Item Four', 'Item Five', 'Item Six', 'Item Eight', 'Item Nine', 'Item Ten', 'Item Eleven', 'Item Twelve', 'Item Thirteen']
      this.items = [ { "amenity_id": "9ca61337-7565-4494-ad6e-e5b1c5c54407", "detailed_category": "Community Amenities", "display": true, "display_name": "Pool", "filter_param": "has_pool", "frequency": 0.344, "general_category": "Building", "impact": 5, "included": true, "is_characteristic": false, "name": "building__has_pool", "p-value": 0, "type": "Amenities" }, { "amenity_id": "1e8f83d5-411f-4100-9e36-13c3b5021107", "detailed_category": "Community Amenities", "display": true, "display_name": "Roof Deck", "filter_param": "has_roof_deck", "frequency": 0.209, "general_category": "Building", "impact": 3, "included": false, "is_characteristic": false, "name": "building__has_roof_deck", "p-value": 0, "type": "Amenities" }, { "amenity_id": "72109196-5f25-4c1b-aef4-9b11125769bd", "detailed_category": "Community Amenities", "display": true, "display_name": "Business Center", "filter_param": "has_business_center", "frequency": 0.204, "general_category": "Building", "impact": 5, "included": true, "is_characteristic": false, "name": "building__has_business_center", "p-value": 0, "type": "Amenities" }, { "amenity_id": "782a4b60-d398-46bc-a7f3-de0bea97c9c6", "detailed_category": "Community Amenities", "display": true, "display_name": "Lounge", "filter_param": "has_lounge", "frequency": 0.18, "general_category": "Building", "impact": 8, "included": true, "is_characteristic": false, "name": "building__has_lounge", "p-value": 0, "type": "Amenities" }, { "amenity_id": "34a486c9-221f-4d6f-a08b-bf0378a9e8ff", "detailed_category": "Community Amenities", "display": true, "display_name": "Club House", "filter_param": "has_club_house", "frequency": 0.107, "general_category": "Building", "impact": 6, "included": false, "is_characteristic": false, "name": "building__has_club_house", "p-value": 0, "type": "Amenities" }, { "amenity_id": "03a6089e-edb7-4dad-be7c-17588c37077b", "detailed_category": "Community Amenities", "display": true, "display_name": "Hot Tub", "filter_param": "has_hot_tub", "frequency": 0.104, "general_category": "Building", "impact": 7, "included": true, "is_characteristic": false, "name": "building__has_hot_tub", "p-value": 0, "type": "Amenities" }, { "amenity_id": "13d4dcab-34be-48df-bb98-2949d67d9e83", "detailed_category": "Community Amenities", "display": true, "display_name": "Conference Room", "filter_param": "has_conference_room", "frequency": 0.073, "general_category": "Building", "impact": 6, "included": false, "is_characteristic": false, "name": "building__has_conference_room", "p-value": 0, "type": "Amenities" }, { "amenity_id": "b24c02ad-c12d-4c8e-a181-aaf1fdac841d", "detailed_category": "Community Amenities", "display": true, "display_name": "Fire Pit", "filter_param": "has_fire_pit", "frequency": 0.072, "general_category": "Building", "impact": 10, "included": true, "is_characteristic": false, "name": "building__has_fire_pit", "p-value": 0, "type": "Amenities" }, { "amenity_id": "babd74fa-4c74-4f7b-9356-4abc5d4b7772", "detailed_category": "Community Amenities", "display": true, "display_name": "Movie Theater", "filter_param": "has_movie_theater", "frequency": 0.065, "general_category": "Building", "impact": 5, "included": false, "is_characteristic": false, "name": "building__has_movie_theater", "p-value": 0, "type": "Amenities" }, { "amenity_id": "45ebfe73-5666-42d8-a55b-4639a2d52473", "detailed_category": "Community Amenities", "display": true, "display_name": "Game Room", "filter_param": "has_game_room", "frequency": 0.02, "general_category": "Building", "impact": 4, "included": true, "is_characteristic": false, "name": "building__has_game_room", "p-value": 0.002, "type": "Amenities" } ]
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  font-size: 20px
  text-align: center
  color: #2c3e50
  margin-top: 60px

h1, h2
  font-weight: normal

ul
  list-style-type: none
  padding: 0


li
  display: inline-block
  margin: 0 10px


.paginate-list
  width: 159px
  margin: 0 auto
  text-align: left
  li
    display: block
    &:before
      content: '⚬ '
      font-weight: bold
      color: slategray

.paginate-links.items
  user-select: none
  a
    cursor: pointer

  li.active a
    font-weight: bold

  li.next:before
    content: ' | '
    margin-right: 13px
    color: #ddd

  li.disabled a
    color: #ccc
    cursor: no-drop

a
  color: #42b983

</style>
