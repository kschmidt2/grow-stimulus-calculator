var calculator = new Vue({
    el: '#calculator',
    data: {
      principal: 5000,
      frequency:1,
      contribution: 100,
      yearsToGrow: 10,
      interestRate: 7,
      totalPrincipal: '',
      totalReturn: '',
      futureBalance: '',

    },
    computed: {
        
    },
    methods: {
      // functions go here
      getResults: function () {
        let P = this.principal,
            r = this.interestRate/100,
            n = this.frequency,
            t = this.yearsToGrow,
            PMT = this.contribution,
            totalContributions,
            fvOfPrincipal,
            fvOfContributions,
            totalReturn,
            totalInvestment,
            combined,
            iData = [],
            rData = [],
            categories,
            catArray = [],
            tickInterval = 5;


        totalContributions = P + (PMT*t);


        fvOfPrincipal = P;
        fvOfContributions = 0;

        let year = new Date().getFullYear();

        for (i=0; i<n*t; i++) {
            fvOfPrincipal = fvOfPrincipal*(1+r/n);
            fvOfContributions = (fvOfContributions+PMT)*(1+r/n);
            totalInvestment = PMT*(i+1) + P;
            combined = fvOfPrincipal + fvOfContributions;
            totalReturn = combined - totalInvestment;
            iData.push(totalInvestment);
            rData.push(totalReturn);

            categories = i + 1 + (year-2000);
            categories.toString();
            categories = "'" + categories;
            catArray.push(categories)
        }

        iData.unshift(P);
        rData.unshift(0);
        catArray.unshift(year);

        if (iData.length > 21) {
            tickInterval = 10;
        }


        if (n==12) {  
            iData = iData.filter((element, index) => {
                return index % 12 === 0;
            })
            rData = rData.filter((element, index) => {
                return index % 12 === 0;
            })
        }

        this.drawChart(iData,rData,catArray,tickInterval);

        this.futureBalance = fvOfPrincipal + fvOfContributions;

        totalReturn = this.futureBalance - totalContributions;

        this.futureBalance = this.futureBalance.toLocaleString(undefined,
            {'minimumFractionDigits':0,'maximumFractionDigits':0});

      },
      drawChart: function(iData,rData,catArray,tickInterval) {

        Highcharts.setOptions({
            lang: {
              thousandsSep: ',',
              numericSymbols: [null, "M", "G", "T", "P", "E"]
            }
        });

        function drawHighcharts() {
            Highcharts.chart('chart-container-CIcalc', {
                chart: {
                    type: 'column',
                    styledMode: true,
                    spacingBottom: 0,
                    spacingRight: 20,
                    spacingLeft: 20,
                    animation: false
                }, 
                title: {
                    text: null
                },
                series: [{
                    name: 'Return',
                    data: rData
                }, {
                    name: 'Investment',
                    data: iData
                }],
                // for line charts only
                plotOptions: {
                    column: {
                        stacking: 'normal'
                    },
                    series: {
                        groupPadding: 0.1
                    }
                },
                legend: {
                    align: 'left',
                    symbolRadius: 0,
                    verticalAlign: 'top',
                    x: -18,
                    itemMarginTop: -10,
                },
                xAxis: {
                    labels: {
                        style: {
                            whiteSpace: 'nowrap',
                        },
                    },
                    categories: catArray,
                    tickLength: 5,
                    tickInterval: tickInterval
                },
                yAxis: {
                    title: false,
                    labels: {
                        // useHTML: true,
                        overflow: 'allow',
                        formatter: function () {
                            return '$' + Highcharts.numberFormat(this.value,0,'.',',');
                        },
                    },
                    tickAmount: 5,
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                    shadow: false,
                    padding: 10,
                    shared: true
                },
            })
        }
        
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            drawHighcharts();
        } else {
            document.addEventListener("DOMContentLoaded", drawHighcharts);
        }

      }
    },
    mounted: function(){
        this.getResults()
     },
  })