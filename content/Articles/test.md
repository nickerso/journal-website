Slug: 10.5072/FK2.stagefigshare.c.2732113.v1
Title: A Modification of the Hodgkin-Huxley Equations Applicable to Purkinje Fibre Action and Pace-Maker Potentials
Date: 2008-01-01
PubAuthors: Nickerson, D. P.
	Hunter, P. J.
	Noble, D.
RunModelURL:opencor://openFile/https://models.cellml.org/workspace/noble_1962/rawfile/c70f8962407db00673f1fdcac9f35a2593781c17/noble_1962.sedml
MathsURL: https://models.cellml.org/e/2a6/noble_1962.cellml/cellml_math
CodeURL: https://models.cellml.org/e/2a6/noble_1962.cellml/cellml_codegen
Documents: SedML
	https://models.physiomeproject.org/workspace/cooling_hunter_crampin_CellML_2008/@@rawfile/fef0cf2d88bae010f529b55a8b981fd15d8b6c69/IP3Submodel_Main.cellML
	CellML
	https://models.physiomeproject.org/workspace/cooling_hunter_crampin_CellML_2008/@@rawfile/fef0cf2d88bae010f529b55a8b981fd15d8b6c69/extracellular_ligand.cellML

### Freetext content

A summary of the article can be put here, along with interactive charts and full-text content.

<canvas id="myChart" width="400" height="400"></canvas>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js" > </script>
<script>
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
</script>