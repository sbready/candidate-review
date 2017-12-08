insert into cities(city_name, county_name, stateid) values ($1, $2, $3)


-- //cities json converter - insert following code into server/index.js and run to insert json into database
-- function jsonConverter(arr){
--     for(var i = 0; i < arr.length; i++){
--         app.get('db').citiesjson_converter([arr[i].city, arr[i].county, arr[i].state_abbrev])
--     }
-- }

-- setTimeout(() => {
--     jsonConverter(citiesjson)
-- }, 3000)