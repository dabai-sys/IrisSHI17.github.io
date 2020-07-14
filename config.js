var config = {
    style: 'mapbox://styles/jiaqishi187/ckbp5o8800bd51iqfvnw3wcm2',
    accessToken: 'pk.eyJ1IjoiamlhcWlzaGkxODciLCJhIjoiY2thdnI5cjRrMGh1bjJ6a3kwY2l2YWM0aiJ9.BOGjg2QBv1lFFcg4e6RYKA',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'l',
            title: '参加起义',
            image: '',
            description: '公元前209年，陈胜在大泽乡起义，并立魏咎为魏王。陈平辞别兄长，前往临济投奔魏王，后又转入项羽手下做谋士。',
            location: {
                center: [114.45509, 34.95738],
                zoom: 10.47,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2',
            title: '投奔刘邦，得到重用',
            image: '',
            description: '公元前205年春，因司马卬背楚降汉，项羽迁怒于陈平。陈平不仅遭到了项羽的责备，而且他出的计谋项羽也不再采纳。于是投奔刘邦。陈平经汉将魏无知推荐，面见刘邦。两人纵论天下大事，十分投机。刘邦破例任陈平为都尉，留在身边做参乘，并命他监护三军将校，后又提升他为护军中尉，专门监督诸将。',
            location: {
                center: [109.13574,34.40861],
                zoom: 10.27,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'quyuan',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: '3',
            title: '放逐江南',
            image: '',
            description: '公元前299年，曲原此时已从汉北的流放地返回。楚怀王轻信秦国， 欲入秦，屈原力劝怀王不要赴会，说：“秦，虎狼之国，不可信，不如无行。怀王不听，入秦随即成人质。3年后，死于秦国。秦、楚绝交。屈原被免去三闾大夫之职，再次流放，放逐江南。他从郢都出发，先到鄂渚，然后入洞庭。最后在溆浦（今湖南怀化市溆浦县）住下来。 “入溆浦余值佃兮，迷不知吾之所如” ',
            location: {
                center: [106.93454, 33.00693],
                zoom: 8.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            title: '离间楚军，气死范增  金蝉脱壳，荥阳突围',
            image: '',
            description: '公元前203年，楚汉战争到了最激烈的时刻。刘邦被项羽围困在荥阳城内达一年之久，并被断绝了外援和粮草通道。刘邦向项羽求和，项羽不许。这时，陈平献计，让刘邦重金收买一些楚军将领，让他们散布谣言，离间楚军内部关系，项羽中了反间计，气死了手下第一谋士范增。     公元前203年5月，项羽猛攻荥阳，形势十分危急，刘邦采纳陈平金蝉脱壳之计，假意约项羽在荥阳东门相见，并让部将纪信化装成自己模样率领两千女子把楚军吸引到东门，而刘邦却从西门逃脱。 ',
            location: {
                center: [113.38678,34.78946],
                zoom: 10.10,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            title: '劝刘邦封韩信齐王',
            image: '',
            description: '公元前203年11月，汉军大将韩信在齐地节节胜利，军威大振。而刘邦受伤正屯兵在广武，与楚军相峙，双方处于胶着状态。韩信乘刘邦失利之机，派遣使者来，要求刘邦封他为假王（代理）。陈平及时提醒刘邦满足韩信的要求，保证汉军内部稳定。',
            location: {
                center: [113.38678,34.78946],
                zoom: 10.10,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: '6',
            title: '劝谏刘邦，穷追项羽',
            image: '',
            description: '公元前202年8月，楚汉双方划定“楚河汉界”。9月，陈平以其谋略家的敏锐洞察力，看到项羽已到了穷途末路了，因此对刘邦说：“现在我们已经占据了大半个天下，而且各路诸侯也都诚心诚意地来依附我们。相反楚军连年作战，疲惫不堪，粮食也快吃光了，这正是上天要我们灭掉楚国的大好时机。我们必须乘此机会把楚灭掉。假如您不抓紧时机去攻打它，就会像人们所说的‘养虎遗患’啊！” 刘邦采纳了陈平的建议，立即发兵攻打项羽。',
            location: {
                center: [113.38678,34.78946],
                zoom: 10.10,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            title: '献计擒韩信',
            image: '',
            description: '公元前202年2月，刘邦登皇帝位，史称汉高祖。封韩信为楚王。公元前201年，有人上书告发楚王韩信谋反。刘邦采纳陈平之计伪游云梦，在楚国陈地擒拿了韩信。',
            location: {
                center: [114.66248,33.62078],
                zoom: 12.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            title: '献计解除白登之围',
            image: '',
            description: '公元前200年冬，刘邦统率三十多万汉军亲征匈奴。在平城（今山西大同市东北），汉军被匈奴冒顿单于的四十万精锐骑兵包围于白登山（今大同市东面），匈奴分扎在各个重要路口，截住汉兵的后援。汉军在被围后，粮食殆尽，汉军饥寒交迫，危在旦夕。陈平又一次献计，让刘邦用重金贿赂冒顿新宠的阏氏（单于的王后），利用阏氏害怕汉朝进献给单于的美女会让自己失宠的担忧，让阏氏劝冒顿撤掉包围。后面果如陈平计谋，刘邦逃出重围。',
            location: {
                center: [113.28520,40.10037],
                zoom: 6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9',
            title: '保护樊哙',
            image: '',
            description: '公元前195年，刘邦击败叛军英布归来，创伤发作病倒，又听说燕王卢绾反叛，就派樊哙率军去讨伐。樊哙走后，有人对刘邦说吕后跟她妹夫樊哙串通一气，对朝廷不利，就决意临阵换将，与陈平计议此事，最后，采用陈平的计谋，以陈平的名义前往樊哙军中传诏，在车中暗载大将周勃，等到了军营里，就宣布立斩樊哙，由周勃夺印代替。陈平、周勃当即动身，在途中定下生擒樊哙、交给刘邦处置的决定，最终保护了樊哙，也获得的吕后的好感。',
            location: {
                center: [108.90810,34.26791],
                zoom: 6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: '10',
            title: '受封丞相',
            image: '',
            description: '因参与平定诸吕之乱，受封左丞相。不久，周勃辞去右丞相职位，陈平一人担任丞相。',
            location: {
                center: [108.90810,34.26791],
                zoom: 10,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: '11',
            title: '去世',
            image: '',
            description: '公元前178年，丞相陈平去世，谥号为献侯。陈平是阳武户牖乡人，西汉王朝的开国功臣之一，《史记》称之为陈丞相。',
            location: {
                center: [108.90810,34.26791],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
