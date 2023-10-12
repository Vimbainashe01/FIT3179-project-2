var vg_1 = "jobs with the highest vacancies.json";
var vg_2 = "Unemployment_rate in usa states.json";
var vg_3 = "cost_of_living_by_state.json";
var vg_4 = "crime_rate.json";
vegaEmbed("#dot_chart", vg_1) .then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#map", vg_2).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

vegaEmbed("#matrix", vg_3).then(function(result) {
        // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
        }).catch(console.error);

vegaEmbed("#bar_chart", vg_4).then(function(result) {
            // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
            }).catch(console.error);