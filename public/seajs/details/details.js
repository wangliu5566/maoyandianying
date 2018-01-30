/**
 * Created by Administrator on 2016/11/17.
 */
define(function(require, exports) {
    var $ = require("$");

    function renderDetails(data){
        $('.dHeader').html(data.map(function(item,index){
            return `
             <div class="dHeaderAll">
            <div class="dLeft fl">${item.url}</div>
            <div class="dMiddle fl">
                <div class="dMiddleU">
                    <h2>${item.chinaName}</h2>
                    <h4>${item.englishName}</h4>
                </div>
                <div class="dMiddleM">
                    <h6>${item.type}</h6>
                    <h5>${item.time}</h5>
                    <h5>${item.playTime}</h5>
                </div>
                <div class="dMiddleB">
                    <button class="btnOne"><img src="/images/详情/奇异博士/1_09.png" alt=""/>想看</button>
                    <button class="btnOne"><img src="/images/详情/奇异博士/1_11.png" alt=""/>评分</button>
                    <button id="buyBtn" class="btnTwo">立即购票</button>
                </div>
            </div>
            <div class="dRight fr">
                <img src="/images/详情/奇异博士/3_03.png" alt=""/>
            </div>
        </div>
        `
        }).join(''));
        $('.dJu').html(data.map(function(item,index){
            return `
                <h3>剧情简介</h3>
                <p>
                    ${item.intro}
                </p>
        `
        }).join(''));
        $('.dYan').html(data.map(function(item,index){
            return `
                <div class="dYanU">
                    <h3>演职人员</h3>
                    <span>全部></span>
                </div>
                <ul class="dListOne">
                    <li class="dItemTwo fl">
                        <b>导演</b> ${item.directorPic}<h4> ${item.director}</h4>
                    </li>
                    <li class="dItemOne fl">
                        <b>演员</b>${item.actorPicOne}<h4>${item.actorOne}</h4><span>饰:奇异博士 Dr</span>
                    </li>
                    <li class="dItemOne fl">
                        <b></b>${item.actorPicTwo}<h4>${item.actorTwo}</h4><span>饰:奇异博士 Dr</span>
                    </li>
                    <li class="dItemOne fl">
                        <b></b>${item.actorPicThree}<h4>${item.actorThree}</h4><span>饰:奇异博士 Dr</span>
                    </li>
                    <li class="dItemOne fl">
                        <b></b>${item.actorPicFour}<h4>${item.actorFour}</h4><span>饰:奇异博士 Dr</span>
                    </li>
                </ul>
        `
        }).join(''));
    }
    function getDetails(_id){
        $.ajax({
            type:'post',
            url:'/movie/getDetails',
            data:{id:_id},
            success:function(data){
                console.log(data);
                renderDetails(data);
                $('#buyBtn').on('click',function(){
                    require('router').go(`#/buy/${_id}`);
                })
            }
        })
    }

    exports.load=function(){
        $('#app').load('./details/details.html',function(){
            var _id;
            if(location.hash.indexOf('#/details/')!==-1){
                _id=location.hash.slice(location.hash.lastIndexOf('/')+1);
            }
            getDetails(_id);
        })
    }
});























//数据



//
//var arr = [ {
//        url:'<img src="/images/首页/12.jpg">',
//        chinaName:'奇异博士',
//        englishName:'Doctor Strange',
//        type:'d动作，冒险，奇幻',
//        time:'美国/115分钟',
//        playTime:'2016-11-04大陆上映',
//        intro:'影片讲述了神经外科医生斯特兰奇因一次车祸失去了双手工作的能力，最终在法师帮助下拥有了超凡的能力，' +
//        '并对抗黑暗力量的故事。出色的外科手术专家史蒂芬·斯特兰奇（本尼迪克特·康伯巴奇 饰）本来事业有成，但在遭遇一次车祸悲剧后，' +
//        '双手再也无法握住手术刀，不能继续他的医生职业,为治疗手伤远赴尼泊尔的他在机缘巧合下遇到了莫度男爵（切瓦特·埃加福特 饰），' +
//        '在莫度男爵推动下他得到了至尊魔法师（蒂尔达·斯文顿 饰）的帮助。斯特兰奇把自己曾经的自负都抛在了一边，开始接触和学习鲜为人知的玄学、' +
//        '以及多维空间世界的学问。在纽约的格林威治村，变身奇异博士的斯特兰奇，化身为现实世界和多维空间的中间人，他利用超自然能力和神器来' +
//        '保护世界不被魔法和神秘力量侵袭。',
//        directorPic:'<img src="/images/详情/奇异博士/3.jpg">',
//        director:'斯科特.德瑞克森',
//        actorPicOne:'<img src="/images/详情/奇异博士/5.jpg">',
//        actorOne:'本尼迪克特.康...',
//        actorPicTwo:'<img src="/images/详情/奇异博士/1.jpg">',
//        actorTwo:'切瓦特.埃加福特',
//        actorPicThree:'<img src="/images/详情/奇异博士/22.jpg">',
//        actorThree:'秋瑞.麦克亚当斯..',
//        actorPicFour:'<img src="/images/详情/奇异博士/2.jpg">',
//        actorFour:'本尼迪特.王',
//        seat:[]
//    },
//        {
//            url:'<img src="/images/首页/6.jpg">',
//            chinaName:'阿拉丁与神灯',
//            englishName:'Les Nouvelles Aventures dAladin',
//            type:'喜剧，爱情',
//            time:'法国/101分钟',
//            playTime:'2016-11-18大陆上映',
//            intro:'影片讲述了神经外科医生斯特兰奇因一次车祸失去了双手工作的能力，最终在法师帮助下拥有了超凡的能力，' +
//            '并对抗黑暗力量的故事。出色的外科手术专家史蒂芬·斯特兰奇（本尼迪克特·康伯巴奇 饰）本来事业有成，但在遭遇一次车祸悲剧后，' +
//            '双手再也无法握住手术刀，不能继续他的医生职业,为治疗手伤远赴尼泊尔的他在机缘巧合下遇到了莫度男爵（切瓦特·埃加福特 饰），' +
//            '在莫度男爵推动下他得到了至尊魔法师（蒂尔达·斯文顿 饰）的帮助。斯特兰奇把自己曾经的自负都抛在了一边，开始接触和学习鲜为人知的玄学、' +
//            '以及多维空间世界的学问。在纽约的格林威治村，变身奇异博士的斯特兰奇，化身为现实世界和多维空间的中间人，他利用超自然能力和神器来' +
//            '保护世界不被魔法和神秘力量侵袭。',
//            directorPic:'<img src="/images/详情/海洋奇缘/21.jpg">',
//            director:'斯科特.德瑞克森',
//            actorPicOne:'<img src="/images/详情/海洋奇缘/6.jpg">',
//            actorOne:'本尼迪克特.康...',
//            actorPicTwo:'<img src="/images/详情/海洋奇缘/10.jpg">',
//            actorTwo:'切瓦特.埃加福特',
//            actorPicThree:'<img src="/images/详情/海洋奇缘/12.jpg">',
//            actorThree:'秋瑞.麦克亚当斯..',
//            actorPicFour:'<img src="/images/详情/海洋奇缘/15.jpg">',
//            actorFour:'本尼迪特.王',
//            seat:[]
//        },
//        {
//            chinaName:'白云桥',
//            englishName:'Brideg in Clouds',
//            type:'恐怖,惊悚,悬疑',
//            time:'中国大陆 / 94分钟',
//            playTime:"2016-11-18大陆上映",
//            intro:'事起源于浙江余姚有1300多年历史的著名古建筑白云桥，此桥经常出现一半晴空一半云雾的灵异现象，相传是连接阴阳两界的桥梁，人在桥上可与鬼魂进行交流。孟妍（钟萱 饰）于午夜子时，在白云桥上遇见了一个小男孩（李卓霖 饰），小男孩引领她进入了另一个空间——“中阴界”。小男孩告诉孟妍一个惊天的秘密， 事关她与张青（温兆伦 饰）的夫妻关系和性命安危。孟妍将信将疑又陷入痛苦和焦虑，小男孩的预言一一应验，孟妍陷入崩溃的边缘，唯有到那阴森神秘的白云桥去寻找答案……',
//            url:'<img src="/images/首页/5.jpg">',
//            directorPic:'<img src="/images/详情/白云桥/3.jpg">',
//            director:"钟萱",
//            actorPicOne:'<img src="/images/详情/白云桥/3.jpg">',
//            actorOne:'钟萱饰：孟妍',
//            actorPicTwo:'<img src="/images/详情/白云桥/7.jpg">',
//            actorTwo:'温兆伦饰：张青',
//            actorPicThree:'<img src="/images/详情/白云桥/11.jpg">',
//            actorThree:'刘宇珽饰：红衣女（阴魄）',
//            actorPicFour:'<img src="/images/详情/白云桥/14.jpg">',
//            actorFour:'夏望饰：王小天',
//            seat:[]
//        },
//        {
//            chinaName:'你的名字',
//            englishName:'your name',
//            type:'剧情/爱情/奇幻',
//            time:'日本/120分钟',
//            playTime:"2016-12-02",
//            intro:'影片讲述了一名少年和一名少女在梦中相遇邂逅的奇幻爱情故事。在千年一遇的彗星造访地球的一个月前，身居日本深山小镇的少女宫水三叶（上白石萌音 配音）每天都过着忧郁烦燥的生活，而正处于青春叛逆期的她对大都市的憧憬向往与日俱增。然而不久，三叶做了一个变成男孩子的梦，眼前的这里有着陌生的房间、朋友和她梦寐以求的宽敞街道。三叶虽然感到迷茫困惑，但能够尽情享受朝思暮想的都市生活的她觉得神清气爽。与此同时，远在他乡的东京少年立花泷（神木隆之介 配音）也有一个奇怪的梦境，睁开睡眼的他发现变成一名不知名姓女孩的自己身处一个从未去过的深山小镇。两人惊醒时发现各自回到了自己的身体，但每逢两人入睡或半梦半醒之际，他们就会交换对调身份。一头雾水的三叶决定循着线索找寻立花泷，而立花泷也试着跟三叶沟通，冥冥之中互换身份的两人不约而同地竭尽所能设法找寻对方，而彼此间的了解也因此渐渐加深，虽未曾相见却早已似曾相识的两人暗生情愫，一段青春季节的奇妙物语随之展开。跨越时空梦境的阻隔，终在现实世界邂逅的两人上演了一幕青涩浪漫的奇遇暖心之恋。岂料一场突如其来的意外将两人的一切美好定格在梦醒之际……',
//            url:'<img src="/images/首页/10.jpg">',
//            directorPic:'<img src="/images/详情/你的名字/3.jpg">',
//            director:"新海诚",
//            actorPicOne:'<img src="/images/详情/你的名字/20.jpg">',
//            actorOne:'上白石萌音饰：三叶（日语配音）',
//            actorPicTwo:'<img src="/images/详情/你的名字/5.jpg">',
//            actorTwo:'神木隆之介饰：公泷（日语配音）.',
//            actorPicThree:'<img src="/images/详情/你的名字/8.jpg">',
//            actorThree:'长泽雅美',
//            actorPicFour:'<img src="/images/详情/你的名字/13.jpg">',
//            actorFour:'市原悦子',
//            seat:[]
//        },
//        {
//            url:'<img src="/images/首页/19.jpg">',
//            chinaName:'神奇动物在哪里',
//            englishName:'Fantastic Beasts and Where to Find T... ',
//            type:'冒险,奇幻,家庭',
//            time:'英国,美国/133分钟',
//            playTime:'2016-11-25大陆上映',
//            directorPic:'<img src="/images/详情/神气动物在哪里/22.jpg">',
//            director:'大卫.叶茨',
//            actorPicOne:'<img src="/images/详情/神气动物在哪里/7.jpg">',
//            actorOne:'埃迪.雷德梅恩',
//            actorPicTwo:'<img src="/images/详情/神气动物在哪里/18.jpg">',
//            actorTwo:'凯瑟琳.沃特斯顿',
//            actorPicThree:'<img src="/images/详情/神气动物在哪里/8.jpg">',
//            actorThree:'艾莉森.萨多尔',
//            actorPicFour:'<img src="/images/详情/神气动物在哪里/16.jpg">',
//            actorFour:'丹. 福勒',
//            intro:'影片讲述了神奇动物学家纽特·斯卡曼德因在纽约城发生的一次意外而不得不去寻找从魔法箱里脱逃的珍奇异兽而展开的冒险' +
//            '旅程。1926年，纽约城魔法世界风起云涌。多个神秘物体在城中大肆破坏，令魔法界陷入了被誓要铲除魔法师的激进灭魔组织“第二' +
//            '塞勒姆”发现的危机之中。而史上最危险的黑巫师盖勒特·格林德沃在欧洲造成灾难毁灭性的破坏后，失去踪影。刚完成环球游历之旅' +
//            '且身怀绝技的神奇动物学家纽特·斯卡曼德（埃迪·雷德梅恩 饰）并未察觉到危机，抵达了他原本只想短暂停留驻足的纽约城。他在旅' +
//            '途中研究并拯救珍奇魔法动物，有一部分更被收集进了他那个看似普通无奇却暗藏玄机，并作为全球珍稀和濒危神奇动物的保护栖息地' +
//            '的魔法手提皮箱。对魔法一无所知的灭魔组织成员雅各布（丹·福勒 饰）意外将斯卡曼德藏在皮箱的奇兽释放到气氛紧张的纽约城中，' +
//            '严重违反了国际巫师联合会保密法。前正气师蒂娜（凯瑟琳·沃特森 饰）插手事件，意图恢复职位。可是事情的进展并不顺利，美国魔' +
//            '法政府机构美利坚魔法国会高深莫测的魔法安全部部长格雷夫斯（柯林·法瑞尔 饰）更将矛头指向斯卡曼德和蒂娜。现在身处同一阵线' +
//            '的斯卡曼德和蒂娜，与蒂娜的妹妹一名法术高超的摄念师奎妮（艾莉森·苏朵儿 饰）及灭魔组织成员雅各布携手，在那些走失的奇兽作' +
//            '恶前找回它们。但事件远比他们想像中更加凶险，被卷入黑暗力量的他们，将魔法世界和灭魔组织引向了开战边缘......',
//            seat:[]
//        },
//        {
//            chinaName:'深海浩劫',
//            englishName:'Deepwater Horizon',
//            type:'剧情,动作,灾难',
//            time:'美国 / 108分钟',
//            playTime:"2016-11-15",
//            intro:'本片改编自真实事件，讲述一队石油工人在面临有史以来最严重的人为灾难时，以无上的勇气和坚定的意志，与灾难搏斗奋力自救的故事。离岸40英里以外，广阔的墨西哥湾洋面上矗立着世界顶尖的海上钻井平台“深水地平线”。平台副经理麦克·威廉姆斯（马克·沃尔伯格 饰）带领自己的团队即将完成一次破纪录深度的钻井作业。不料突发井压不稳和压冲导致紧急安全系统失灵，随即引发连环爆炸，深海原油冲破井盖喷涌出来，形成数十米高的油柱，冲天大火随之而来。数百万吨原油倾泻而出，整个钻井平台及附近的海平面都被遮天浓烟和熊熊大火包围，变成人间炼狱，126名钻井工人被困其中。因火势太大，海上救援队伍无法靠近。麦克带领几名勇敢的同伴，展开自救行动。他们搜救伤者、安排撤离，坚守到最后一刻。钻井平台即将沉没，麦克和他的同伴必须在水深火热之中逃出生天。',
//            url:'<img src="/images/首页/16.jpg">',
//            directorPic:'<img src="/images/详情/深海浩劫/6.jpg">',
//            director:"彼得伯格",
//            actorPicOne:'<img src="/images/详情/深海浩劫/4.jpg">',
//            actorOne:'马克·沃尔伯格饰：Mike Williams',
//            actorPicTwo:'<img src="/images/详情/深海浩劫/18.jpg">',
//            actorTwo:'吉娜·罗德里格兹饰：Andrea Fleytas.',
//            actorPicThree:'<img src="/images/详情/深海浩劫/21.jpg">',
//            actorThree:'库尔特·拉塞尔饰：Jimmy Harrell',
//            actorPicFour:'<img src="/images/详情/深海浩劫/8.jpg">',
//            actorFour:'迪伦·奥布莱恩饰：Caleb Hollow',
//            seat:[]
//        },
//        {
//            chinaName:'比利·林恩的中场战事',
//            englishName:'Billy Lynn-s Long Halftime Walk',
//            type:'剧情，战争',
//            time:'2016-11-11大陆上映',
//            playTime:"2016-11-18大陆上映",
//            intro:'根据本·芳汀同名小说改编，讲述一位年轻士兵在伊拉克战争中与战友凯旋归来并被誉为美国英雄，借由一场感恩节橄榄球公开赛的中场表演，揭露这群士兵在战场上真实经历的故事。19岁的德州士兵比利·林恩（乔·阿尔文 饰），他在加入美军步兵部队后，被派往伊拉克战场，与其他七名的突击小队成员，在伊拉克与当地反对武装进行了3分43秒的激战，他和战友们在一次交火中大难不死、逃过一劫。机缘巧合成为伊拉克战争中的国家英雄，被邀请至感恩节全美橄榄球比赛的中场休息时亮相。而在此期间的一连串遭遇则使他逐步意识到关于战争的实质与国家的真相......',
//            url:'<img src="/images/首页/9.jpg">',
//            directorPic:'<img src="/images/详情/深海浩劫/6.jpg">',
//            director:"李安",
//            actorPicOne:'<img src="/images/详情/深海浩劫/4.jpg">',
//            actorOne:'乔·阿尔文饰：比利·林恩 Billy Lynn',
//            actorPicTwo:'<img src="/images/详情/深海浩劫/18.jpg">',
//            actorTwo:'克里斯汀·斯图尔特饰：凯瑟琳·林恩 Kathryn Lynn',
//            actorPicThree:'<img src="/images/详情/深海浩劫/21.jpg">',
//            actorThree:'加内特·赫德兰饰：大卫·戴姆军士 Sgt. David Dime',
//            actorPicFour:'<img src="/images/详情/深海浩劫/8.jpg">',
//            actorFour:'克里斯·塔克饰：艾伯特 Albert',
//            seat:[]
//        },
//        {
//            url:'<img src="/images/首页/1.jpg">',
//            chinaName:'我不是潘金莲',
//            englishName:'I Am Not Madame Bovary',
//            type:'剧情,喜剧',
//            time:'中国大陆/140分钟',
//            playTime:'2016-11-18大陆上映',
//            intro:'影片讲述一个普通的农村妇女李雪莲（范冰冰 饰），为了纠正一句话，与上上下下、方方面面打了十年交道。打交道的过程中，' +
//            '她没想到一件事变成了另一件事，接着变成了第三件事。十年过去，她没有把这句话纠正过来，但她饱尝了世间的人情冷暖，悟明白了' +
//            '另外一个道理。李雪莲要纠正的这句话是她前夫说的。她前夫说：“你是李雪莲吗？我咋觉得你是潘金莲呢？”李雪莲要告诉大家的是：' +
//            '我不是潘金莲。',
//            directorPic:'<img src="/images/详情/我不是潘金莲/10.jpg">',
//            director:'冯小刚',
//            actorPicOne:'<img src="/images/详情/我不是潘金莲/15.jpg">',
//            actorOne:'范冰冰',
//            actorPicTwo:'<img src="/images/详情/我不是潘金莲/28.jpg">',
//            actorTwo:'郭涛',
//            actorPicThree:'<img src="/images/详情/我不是潘金莲/24.jpg">',
//            actorThree:'董成鹏',
//            actorPicFour:'<img src="/images/详情/我不是潘金莲/17.jpg">',
//            actorFour:'张嘉译',
//            seat:[]
//        }]
//
//db.movie.insert(arr);




