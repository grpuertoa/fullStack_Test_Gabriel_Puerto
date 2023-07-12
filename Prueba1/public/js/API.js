async function countries() {
    try {
        const selectElement = document.getElementById('list-select');
        const countryInput = document.getElementById('country');
        const infoTextArea = document.getElementById('country_info');
        const clearButton = document.getElementById('clear');
        const response = await fetch("https://countriesnow.space/api/v0.1/countries/population")
            .then(
                res => {
                    return res.json();
                }
            )
            .then(
                data => {
                    data.data.forEach(element => {
                        const optionElement = document.createElement('option');
                        optionElement.value = element.country;
                        optionElement.textContent = element.country;
                        selectElement.appendChild(optionElement);
                    });

                    selectElement.addEventListener('change', function () {
                        const selectedCountry = selectElement.value;
                        const selectedCountryData = data.data.find(country => country.country == selectedCountry)
                        const population = selectedCountryData.populationCounts;
                        const latestPopulation = population[population.length - 1];
                        if (selectedCountryData) {
                            countryInput.value = selectedCountryData.country;
                            infoTextArea.value = `Código ISO 3166-1 \nalfa-3: ${selectedCountryData.iso3} \nPoblación más reciente año: ${latestPopulation.year} \nPoblación: ${latestPopulation.value}`;
                        }
                    });

                    clearButton.addEventListener('click', function () {
                        selectElement.selectedIndex = 0;
                        countryInput.value = "";
                        infoTextArea.value = "";
                    })


                }
            )
    } catch (e) {
        console.log(e);
    }
}
