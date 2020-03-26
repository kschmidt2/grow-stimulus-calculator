var calculator = new Vue({
    el: '#calculator',
    data: {
      income: '50,000',
      filingStatus:'single',
      children: 0,
      totalAdult: '',
      totalChildren: '',
      totalStimulus: '',
      nothing: ''

    },
    watch: { 
        income: function(newValue) { 
            const result = newValue.replace(/\D/g, "") 
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
            Vue.nextTick(() => this.income = result); 
        }, 
    }, 
    methods: {
      // functions go here
      getResults: function () {

        this.totalStimulus = 0;
        this.totalAdult = 1200;
        this.totalChilden = 0;

        let maxFull = 75000,
            maxAny = 99000,
            multiplier = 1;
        
        if (this.filingStatus == 'married') {
            maxFull = 150000;
            multiplier = 2;
        } else if (this.filingStatus == 'head') {
            maxFull = 112500;
        }


        this.totalChildren = this.children*500;
        this.totalAdult = this.totalAdult*multiplier;

        if (this.filingStatus == 'single') {
            this.totalChildren = 0;
        }

        this.totalStimulus = this.totalAdult + this.totalChildren;

        if (this.income > maxFull) {
            this.totalStimulus = this.totalStimulus - (this.income - maxFull)*.05;
        }

        if (this.totalStimulus <= 0) {
            this.nothing = true;
        }

        console.log(this.totalStimulus);

        this.totalStimulus = this.totalStimulus.toLocaleString(undefined,
            {'minimumFractionDigits':0,'maximumFractionDigits':0});

      },
    },
    mounted: function(){
        // this.getResults()
     },
  })

  function limitNumber () {
    if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
        type = "number"
        maxlength = "2"
    }
  }