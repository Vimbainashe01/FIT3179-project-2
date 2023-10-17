var vg_1 = "jobs with the highest vacancies.json";
var vg_2 = "Unemployment_rate in usa states.json";
var vg_3 = "cost_of_living_by_state.json";
var vg_4 = "Season Map.json";
var vg_5 = "cost_of_living_2.json";
vegaEmbed("#dot_chart", vg_1) .then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#map", vg_2).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

vegaEmbed("#matrix1", vg_3).then(function(result) {
        // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
        }).catch(console.error);

vegaEmbed("#map2", vg_4).then(function(result) {
            // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
            }).catch(console.error);

vegaEmbed("#matrix2", vg_5).then(function(result) {
                // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
                }).catch(console.error);