new Vue({
    el: '#app',
    data() {
        return {
            lorem: '',
            copied: false,
            settings: {
                maxLength: 80,
                length: 24,
            }
        };
    },
    computed: {
        lengthThumbPosition: function () {
            return (((this.settings.length - 6) / (this.settings.maxLength - 6)) * 100);
        },
        digitsThumbPosition: function () {
            return (((this.settings.digits - 0) / (this.settings.maxDigits - 0)) * 100);
        },
        symbolsThumbPosition: function () {
            return (((this.settings.symbols - 0) / (this.settings.maxSymbols - 0)) * 100);
        },
        strength: function () {
            var count = {
                excess: 0,
                upperCase: 0,
                numbers: 0,
                symbols: 0
            };

            var weight = {
                excess: 3,
                upperCase: 4,
                numbers: 5,
                symbols: 5,
                combo: 0,
                flatLower: 0,
                flatNumber: 0
            };

            var strength = {
                text: '',
                score: 0
            };

            var baseScore = 30;

            for (i = 0; i < this.lorem.length; i++) {
                if (this.lorem.charAt(i).match(/[A-Z]/g)) {
                    count.upperCase++;
                }
                if (this.lorem.charAt(i).match(/[0-9]/g)) {
                    count.numbers++;
                }
                if (this.lorem.charAt(i).match(/(.*[!,@,#,$,%,^,&,*,?,_,~])/)) {
                    count.symbols++;
                }
            }

            count.excess = this.lorem.length - 6;

            if (count.upperCase && count.numbers && count.symbols) {
                weight.combo = 25;
            } else if ((count.upperCase && count.numbers) || (count.upperCase && count.symbols) || (count.numbers && count.symbols)) {
                weight.combo = 15;
            }

            if (this.lorem.match(/^[\sa-z]+$/)) {
                weight.flatLower = -30;
            }

            if (this.lorem.match(/^[\s0-9]+$/)) {
                weight.flatNumber = -50;
            }

            var score =
                baseScore +
                (count.excess * weight.excess) +
                (count.upperCase * weight.upperCase) +
                (count.numbers * weight.numbers) +
                (count.symbols * weight.symbols) +
                weight.combo + weight.flatLower +
                weight.flatNumber;

            if (score < 30) {
                strength.text = "weak";
                strength.score = 10;
                return strength;
            } else if (score >= 30 && score < 75) {
                strength.text = "average";
                strength.score = 40;
                return strength;
            } else if (score >= 75 && score < 150) {
                strength.text = "strong";
                strength.score = 75;
                return strength;
            } else {
                strength.text = "secure";
                strength.score = 100;
                return strength;
            }
        },
    },
    mounted() {
        this.generatelorem();
    },
    watch: {
        settings: {
            handler: function () {
                this.generatelorem();
            },
            deep: true
        }
    },
    methods: {
        // copy lorem to clipboard
        copyToClipboard() {
            // we should create a textarea, put the lorem inside it, select it and finally copy it
            var copyElement = document.createElement("textarea");
            copyElement.style.opacity = '0';
            copyElement.style.position = 'fixed';
            copyElement.textContent = this.lorem;
            var body = document.getElementsByTagName('body')[0];
            body.appendChild(copyElement);
            copyElement.select();
            document.execCommand('copy');
            body.removeChild(copyElement);

            this.copied = true;
            // reset this.copied
            setTimeout(() => {
                this.copied = false;
            }, 1500);
        },
        // generate the lorem
        generatelorem() {
            var lettersSetArray = ["a","ac","at","abaces","adipiscing","aenean","æternam","alea","aliquam","aliquet","alter","amet","ante","arcu","arma","augue","ave","bacchæ","bagoas","balastrum","bannio","barbari","beati","bene","bibendum","bis","blandit","bonum","canem","carpe","cave","cogito","congue","consectetuer","consectetur","consensus","consequat","convallis","cras","credo","cubilia","curabitur","curae","cursus","de","deo","desinit","diam","diem","dignissim","dignus","dolor","dui","duis","egestas","ego","eleifend","elementum","elit","enim","erat","ergo","eros","est","et","eu","euismod","extenso","extremis","facto","faucibus","felis","fermentum","feugiat","fili","fine","fluctuia","fusce","gabalus","gallice","gallus","gannitura","gastrum","gemulus","generis","genitus","gnaritas","grata","gratias","gravida","habilititas","hac","halatus","hem","hemithea","hendrerit","hic","hippace","hirpex","hominis","homo","honorabilis","hortatio","hymnus","iaculis","ibi","icteros","id","idea","idolum","igneus","ignorabilis","imperdiet","in","integer","intrare","ipsum","jacta","jactare","jocaliter","joculatio","jubar","jubile","jugalis","junctor","justificator","justo","juvo","kalendae","lacrimabilis","lacus","lateramen","lato","laudatio","lectus","leo","libero","libris","ligula","lobortis","lorem","luctus","maecenas","magna","massa","mater","mauris","memoriam","mergitur","metus","mi","molestie","mollis","morbi","naturalis","nauticus","nec","nefastus","negligenter","neoterice","nibh","nihil","nisl","nomine","non","nonummy","nulla","nunc","obeo","oblatio","obstat","occultate","odio","offensibilis","oleo","omnium","optimus","orbi","orci","ornare","pace","patri","pauperes","pede","pellentesque","persona","pharetra","placerat","porttitor","posuere","praesent","pretium","primis","proin","pulvinar","purus","qua","qualitas","quam","quæstus","quibusdam","quinam","quis","quo","quoque","quorsum","raptio","rationabilis","recensio","repetita","revelat","rhoncus","risus","rutrum","sancti","sapien","scelerisque","sed","sem","semper","sensu","sit","sodales","sollicitudin","spiritu","sum","suscipit","suspendisse","tellus","tempor","tempus","tincidunt","tortor","tristique","tu","turpis","ubi","ubique","ullamcorper","ultor","ultrices","ultricies","unitas","ut","utrimque","utus","varius","vehicula","vel","velit","veni","vestibulum","vici","vidi","vinum","vitae","vivamus","volutpat","voto","vox","vulputate","xenium","xeniolum","xiphias","zelator","zelotes","zona","zonalis"];

            var loremArray = [];

            for (var i = 0; i < this.settings.length; i++) {
                    loremArray[i] = lettersSetArray[Math.floor(Math.random() * lettersSetArray.length)];
            }
            this.lorem = loremArray.join(" ");
        },
    },
});