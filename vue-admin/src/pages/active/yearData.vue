<template>
	<div class="yearData" id="yearData" ref="yearData">
		<!-- 背景音乐 -->
		<div class="audio-box">
			<audio id="audio" autoplay="autoplay" loop="loop">
				<source src="../../assets/audio/active.mp3" type="audio/mpeg" />
			</audio>
		</div>
		<!-- 首页处理 -->
		<div class="p1" v-if="p1Flag">
			<img src="../../assets/images/yearData/p1_bg.jpg" class="p1_bg" :class="{'fullHeight':fullHeightFlag}" />
			<div v-if="dataFlag">
				<img src="../../assets/images/yearData/p1_hand.png" class="p1_hand"/>
				<div class="p1_span_box">
					<span class="p_span p1_span">亲爱的</span>
					<span class="p_span p1_span p1_span2">{{username}}</span>
					<img src="../../assets/images/yearData/p1_span_img1.png" class="p1_span_img1"/>
				</div>
			</div>
			<div v-if="!dataFlag">
				<img src="../../assets/images/yearData/p2_hand.png" class="p2_hand"/>
				<div class="p1_span_box">
					<span class="p_span p2_span">Hi~</span>
					<span class="p_span p2_span p2_span2">{{username}}</span>
					<span class="p_span p2_span p2_span3">你了解VIP微课吗？</span>
					<div class="p_span p2_span4">
						<span class="span4">VIP微课是一家在线音乐知识传递平台。
						</span>
						<span class="span4">致力于为你提供更专业、更具实战性的钢琴教
						</span>
						<span class="span4">学知识，涉及钢琴演奏、作品分析、教学指导
						</span>
						<span class="span4">等多个方面，欢迎走进VIP微课哦～
						</span>
					</div>
				</div>
			</div>
			<div class="p1_button" @click="goContent">回忆我们的故事</div>
		</div>
		<!-- 动效模块 -->
		<div class="content" v-if="contentFlag">
			<img src="../../assets/images/yearData/p2_bg.jpg" class="p2_bg" :class="{'fullHeight':fullHeightFlag}"/>
			<img src="../../assets/images/yearData/content_page1.png" :class="Page1Class"/>
			<img src="../../assets/images/yearData/content_page2.png" :class="Page2Class" />
			<img src="../../assets/images/yearData/content_page3.png" :class="litterClass" />
			<img src="../../assets/images/yearData/p2_button.png" class="p2_button" v-if="slideFlag&&page!=5&&page!=9" />
		</div>
		<!-- 内容页 -->
		<div class="pages" v-if="contentFlag">
			<div class="page-item page-item1" v-if="page==2" :class="pageAnimation">
				<img src="../../assets/images/yearData/p2_title.png" class="p2_title" />
				<span class="page-text">还记得</span>
				<span class="page-weight-text">{{registerTime}}</span>
				<span class="page-text">是什么日子吗？</span>

				<span class="page-weight-text marginThreeNine">那一天我们相遇</span>
				<span class="page-text">你在我生命中</span>
				<span class="page-text">占据了重要的位置</span>
			</div>
			<div class="page-item page-item2" v-if="page==3" :class="pageAnimation">
				<span class="page-weight-text">{{firstShareTime}}</span>
				<span class="page-text">你预约的第一节讲座是</span>
				<div class="poster-box">
					<img :src="firstClassPoster" class="poster" />
					<img src="../../assets/images/yearData/poster_bg.png" class="poster_bg" />
				</div>
				<span class="page-text ">这一天是我们故事的开始</span>

				<span class="page-text marginThreeNine">这一年</span>
				<span class="page-have-weight">通过<span class="fontWeight"> {{classCount}}节 </span>讲座的学习</span>
				<span class="page-text">我们更加亲密了</span>
			</div>
			<div class="page-item page-item3" v-if="page==4" :class="pageAnimation">
				<span class="page-have-weight">其中<span class="fontWeight"> {{moreMonth}}月</span></span>
				<span class="page-have-weight">你参加的讲座最多，共<span class="fontWeight"> {{moreMonthNum}}节</span></span>

				<span class="page-text marginThreeNine">你最爱的频道是</span>
				<span class="page-weight-text">{{classify}}类课程</span>

				<span class="page-text marginThreeNine">我想你在音乐方面一定很专业</span>
			</div>
			<div class="page-item page-item4" v-if="page==5" :class="pageAnimation">
				<span class="page-weight-text addBlod">好友之间需要细水长流的陪伴</span>
				<span class="page-weight-text addBlod">2018我愿陪你一直走下去</span>
				<img src="../../assets/images/yearData/p5_logo.png" class="p5_logo"/>
				<span class="samll-span marginTopOneOneTwo">听说VIP微课有股神奇的力量</span>
				<span class="samll-span">可以实现你的新年愿望</span>
				<img src="../../assets/images/yearData/p5_button.png" class="p5_button " @click="selectRole"/>
			</div>
			<div class="page-item page-item7" v-if="page==7" :class="pageAnimation">
				<img src="../../assets/images/yearData/p2_title.png" class="p2_title" />
				<span class="page-text marBottom10">这一年</span>
				<span class="page-have-weight marBottom10">VIP微课给大家准备了<span class="fontWeight"> 123节 </span>讲座</span>
				<span class="page-have-weight">共<span class="fontWeight"> 65473位 </span>朋友收听</span>
				<span class="page-text marTop27 marBottom10">来听讲座的朋友可包围</span>
				<span class="page-have-weight"><span class="fontWeight"> 33个 </span>维也纳金色大厅</span>

				<span class="page-text marTop27 ">最受欢迎的是</span>
				<span class="page-weight-text marBottom10">2017年9月7日</span>
				<span class="page-have-weight marBottom10"><span class="fontWeight"> 董锐 </span>讲授的</span>
				<span class="page-weight-text page-weight-text-left marBottom10">《如何指导学生正确训练高抬指》</span>
				<span class="page-have-weight ">讲座，共<span class="fontWeight"> 7499位 </span>朋友预约学习</span>
			</div>
			<div class="page-item page-item8" v-if="page==8" :class="pageAnimation">
				<span class="page-have-weight"><span class="fontWeight"> 广东 </span>的朋友学习热情最高</span>
				<span class="page-have-weight">累计学习高达<span class="fontWeight"> 5252人次 </span></span>

				<span class="page-have-weight marginThreeNine"><span class="fontWeight"> 广东 </span>共有<span class="fontWeight"> 2位 </span> 朋友</span>
				<span class="page-text">预约了全年123节讲座</span>
				<span class="page-weight-text">全年无休，学霸担当</span>
				<span class="page-text">此处当有掌声鼓励！</span>
			</div> 
			<div class="page-item page-item9" v-if="page==9" :class="pageAnimation">
				<img src="../../assets/images/yearData/hot_class.png" class="hot_class" />
				<img src="../../assets/images/yearData/p9-back.png" class="p9-back" />
				<!-- 词云 -->
				<img src="../../assets/images/yearData/word_top.png" class=" img_wrap imgwrapAnimation" :class="{'floatY':p9Float}"/>
				<img src="../../assets/images/yearData/word_bottom.png" class=" img_wrap imgwrapAnimation" :class="{'floatDown':p9Float}"/>

				<img src="../../assets/images/yearData/p9-font.png" class="p9-font" />
				<img src="../../assets/images/yearData/p5_button.png" class="p9_button clickButton" @click="selectRole"/>
				<div class="p9_span_box">
					<span class="p9_span">听说VIP微课有股神奇的力量</span>
					<span class="p9_span">可以实现你的新年愿望</span>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	.yearData{
		position: relative;
		width: 100%;
		overflow-x: hidden;
		position:absolute; 
		overflow:scroll;
		-webkit-overflow-scrolling: touch;
		top:0; left:0; bottom:0; right:0;
		overflow-x:hidden; 
		.audio-box{
			position: absolute;
			top: 0;
			z-index: -1000;
		}
		.p1{
			position: relative;
			width: 100%;
			height: 100%;
			.p1_bg{
				position: absolute;
				top: 0;
				width: 100%;
				bottom: 0;
				// height: 100%;
				z-index: -1;
			}
			//有数据时手的动画
			.p1_hand{
				width: 100%;
				position: absolute;
				top:0rem;
				animation: p1Hand 1s;
				-webkit-animation:p1Hand 1s;
				-moz-animation:p1Hand 1s;
				-o-animation:p1Hand 1s;
			}
			//无数据时手的动画
			.p2_hand{
				width: 100%;
				position: absolute;
				top:0rem;
				animation: p1Hand 1s;
				-webkit-animation:p1Hand 1s;
				-moz-animation:p1Hand 1s;
				-o-animation:p1Hand 1s;
			}
			@keyframes p1Hand{
				0% {top: -186/20rem;}
				100% {top: 0;}
			}
			@-webkit-keyframes p1Hand{
				0% {top: -186/20rem;}
				100% {top: 0;}
			}
			@-moz-keyframes p1Hand{
				0% {top: -186/20rem;}
				100% {top: 0;}
			}
			@-o-keyframes p1Hand{
				0% {top: -186/20rem;}
				100% {top: 0;}
			}
            //首页文字显示
            .p1_span_box{
            	animation: p1Span 1.5s;
            	-webkit-animation:p1Span 1.5s;
            	-moz-animation:p1Span 1.5s;
            	-o-animation:p1Span 1.5s;
            	.p_span{
            		position: absolute;
            		display: block;
            		width: 100%;
            		text-align: center;
            		color: #fff;
            	}
            	.p1_span{
            		height: 28/20rem;
            		line-height: 28/20rem;
            		font-size: 1rem;
            		top: 39/20rem;
            	}
            	.p1_span2{top: 67/20rem;}
            	.p1_span_img1{
            		position: absolute;
            		top:119/20rem;
            		width: 189/20rem;
            		left: 93/20rem;
            	}
            	.p2_span{
            		height: 18/20rem;
            		line-height: 18/20rem;
            		font-size: .9rem;
            		top: 172/20rem;
            	}
            	.p2_span2{top: 199/20rem;}
            	.p2_span3{top: 245/20rem;}
            	.p2_span4{
            		height: 14/20rem;
            		line-height: 14/20rem;
            		font-size: .7rem;
            		top: 290/20rem;
            		.span4{
            			display: block;
            			margin-bottom: 7/20rem;
            		}
            	}
            }
            @keyframes p1Span{
            	0% {opacity: 0;}
            	100% {opacity: 1;}
            }
            @-webkit-keyframes p1Span{
            	0% {opacity: 0;}
            	100% {opacity: 1;}
            }
            @-moz-keyframes p1Span{
            	0% {opacity: 0;}
            	100% {opacity: 1;}
            }
            @-o-keyframes p1Span{
            	0% {opacity: 0;}
            	100% {opacity: 1;}
            }
			//回忆我们的故事button
			.p1_button{
				position: relative;
				width: 240/20rem;
				height: 48/20rem;
				margin:0rem auto;
				top: 405/20rem;
				border:.15rem solid #EA6324;
				border-radius: 57/20rem;
				line-height: 45/20rem;
				font-size: .8rem;
				text-align: center;
				color: #EA6324;
				background-color: #fff;
			}
		}
		.content{
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;	

			.p2_bg{
				position: fixed;
				bottom: 0;
				width: 100%;
				// height: 100%;
				vertical-align: middle;
			}
			//信纸1显示
			.content_page1Show{
				width: 100%;
				position: absolute;
				top: 66/20rem;
			}
			.page1Show_animation{
				animation: Page1Show 1s ;
				-webkit-animation:Page1Show 1s ;
				-moz-animation:Page1Show 1s ;
				-o-animation:Page1Show 1s ;
			}
			@keyframes Page1Show{
				0%{top:117/20rem;left: -386/20rem;}
				100%{top: 66/20rem;left: 0;}
			}
			@-webkit-keyframes Page1Show{
				0%{top:117/20rem;left: -386/20rem;}
				100%{top: 66/20rem;left: 0;}
			}
			@-moz-keyframes Page1Show{
				0%{top:117/20rem;left: -386/20rem;}
				100%{top: 66/20rem;left: 0;}
			}
			@-o-keyframes Page1Show{
				0%{top:117/20rem;left: -386/20rem;}
				100%{top: 66/20rem;left: 0;}
			}
			//信纸1隐藏
			.content_page1Hidden{
				width: 100%;
				position: absolute;
				top:117/20rem;
				left: -386/20rem;
			}
			.page1Hideen_animation{
				animation: Page1Hidden 0.5s;
				-webkit-animation:Page1Hidden 0.5s;
				-moz-animation:Page1Hidden 0.5s;
				-o-animation:Page1Hidden 0.5s;
			}
			@keyframes Page1Hidden{
				0%{top: 0;left: 0;}
				100%{top:117/20rem;left: -386/20rem;}
			}
			@-webkit-keyframes Page1Hidden{
				0%{top: 0;left: 0;}
				100%{top:117/20rem;left: -386/20rem;}
			}
			@-moz-keyframes Page1Hidden{
				0%{top: 0;left: 0;}
				100%{top:117/20rem;left: -386/20rem;}
			}
			@-o-keyframes Page1Hidden{
				0%{top: 0;left: 0;}
				100%{top:117/20rem;left: -386/20rem;}
			}
			//信纸2显示
			.content_page2Show{
				width: 100%;
				position: absolute;
				top: 49/20rem;
			}
			.page2Show_animation{
				animation: Page2Show 1s;
				-webkit-animation:Page2Show 1s;
				-moz-animation:Page2Show 1s;
				-o-animation:Page2Show 1s;
			}
			@keyframes Page2Show{
				0%{top:-185/20rem;right: -385/20rem;}
				100%{top: 49/20rem;right: 0;}
			}
			@-webkit-keyframes Page2Show{
				0%{top:-185/20rem;right: -385/20rem;}
				100%{top: 49/20rem;right: 0;}
			}
			@-moz-keyframes Page2Show{
				0%{top:-185/20rem;right: -385/20rem;}
				100%{top: 49/20rem;right: 0;}
			}
			@-o-keyframes Page2Show{
				0%{top:-185/20rem;right: -385/20rem;}
				100%{top: 49/20rem;right: 0;}
			}
			//信纸2隐藏
			.content_page2Hidden{
				width: 100%;
				position: absolute;
				top:-185/20rem;right: -385/20rem;
			}
			.page2Hideen_animation{
				animation: Page2Hidden 0.5s;
				-webkit-animation:Page2Hidden 0.5s;
				-moz-animation:Page2Hidden 0.5s;
				-o-animation:Page2Hidden 0.5s;
			}
			@keyframes Page2Hidden{
				0%{top: 0;right: 0;}
				100%{top:-185/20rem;right: -385/20rem;}
			}
			@-webkit-keyframes Page2Hidden{
				0%{top: 0;right: 0;}
				100%{top:-185/20rem;right: -385/20rem;}
			}
			@-moz-keyframes Page2Hidden{
				0%{top: 0;right: 0;}
				100%{top:-185/20rem;right: -385/20rem;}
			}
			@-o-keyframes Page2Hidden{
				0%{top: 0;right: 0;}
				100%{top:-185/20rem;right: -385/20rem;}
			}
			//信纸显示
			.content_litter_show{
				position: absolute;
				width: 112/20rem;
				height: 106/20rem;
				top: 0;right: 12/20rem;
			}
			.litter_show_animation{
				animation: litterShow 1s;
				-webkit-animation:litterShow 1s;
				-moz-animation:litterShow 1s;
				-o-animation:litterShow 1s;
			}
			@keyframes litterShow{
				0%{top: 340/20rem;right: -440/20rem;}
				100%{top: 0;right: 12/20rem;}
			}
			@-webkit-keyframes litterShow{
				0%{top: 340/20rem;right: -440/20rem;}
				100%{top: 0;right: 12/20rem;}
			}
			@-moz-keyframes litterShow{
				0%{top: 340/20rem;right: -440/20rem;}
				100%{top: 0;right: 12/20rem;}
			}
			@-o-keyframes litterShow{
				0%{top: 340/20rem;right: -440/20rem;}
				100%{top: 0;right: 12/20rem;}
			}
			//信封隐藏
			.content_litter_hidden{
				position: absolute;
				width: 112/20rem;
				height: 106/20rem;
				top: 340/20rem;
				right: -440/20rem;
			}
			.litter_hidden_animation{
				animation: litterHidden 0.5s;
				-webkit-animation:litterHidden 0.5s;
				-moz-animation:litterHidden 0.5s;
				-o-animation:litterHidden 0.5s;
			}
			@keyframes litterHidden{
				0%{top: 0;right: 12/20rem;}
				100%{top: 340/20rem;right: -440/20rem;}
			}
			@-webkit-keyframes litterHidden{
				0%{top: 0;right: 12/20rem;}
				100%{top: 340/20rem;right: -440/20rem;}
			}
			@-moz-keyframes litterHidden{
				0%{top: 0;right: 12/20rem;}
				100%{top: 340/20rem;right: -440/20rem;}
			}
			@-o-keyframes litterHidden{
				0%{top: 0;right: 12/20rem;}
				100%{top: 340/20rem;right: -440/20rem;}
			}
			//上滑按钮
			.p2_button{
				position: fixed;
				width: 32/20rem;
				left: 172/20rem;
				bottom: 20rem;
				animation: upAnimation 1.5s infinite;
				-webkit-animation:upAnimation 1.5s infinite;
				-moz-animation:upAnimation 1.5s infinite;
				-o-animation:upAnimation 1.5s infinite;
			}
			@keyframes upAnimation{
				0%{opacity: 0.7;bottom: 20/20rem;}
				50%{opacity: 1;bottom: 40/20rem;}
				100%{opacity: .7;bottom: 20/20rem;}
			}
			@-webkit-keyframes upAnimation{
				0%{opacity: 0.7;bottom: 20/20rem;}
				50%{opacity: 1;bottom: 40/20rem;}
				100%{opacity: .7;bottom: 20/20rem;}
			}
			@-moz-keyframes upAnimation{
				0%{opacity: 0.7;bottom: 20/20rem;}
				50%{opacity: 1;bottom: 40/20rem;}
				100%{opacity: .7;bottom: 20/20rem;}
			}
			@-o-keyframes upAnimation{
				0%{opacity: 0.7;bottom: 20/20rem;}
				50%{opacity: 1;bottom: 40/20rem;}
				100%{opacity: .7;bottom: 20/20rem;}
			}
		}
		.pages{
			position: relative;
			top: 0;	
			width: 100%;
			height: 100%;
			.page-item{
				position: relative;
				top: 0;	
				width: 100%;
				height: 100%;
				.poster-box{
					position: relative;
					margin-bottom: 11/20rem;
					width: 221/20rem;
					height: 110/20rem;
					.poster{
						position: absolute;
						width: 209/20rem;
						height: 96/20rem;
						left: 6/20rem;
						top: 7/20rem;
					}
					.poster_bg{
						position: absolute;
						width: 221/20rem;
						height: 110/20rem;
						top: 0;
					}
				}
				.p2_title{
					display: block;
					width: 116/20rem;
					margin-bottom: 30/20rem;
				}
				.page-text{
					display: block;
					height: 14/20rem;
					font-size: 14/20rem;
					line-height: 14/20rem;
					color: #8B572A;
					margin-bottom: 13/20rem;
				}
				.page-weight-text{
					display: block;
					height: 18/20rem;
					font-size: 18/20rem;
					line-height: 18/20rem;
					color: #8B572A;
					margin-bottom: 13/20rem;
					font-weight:bold;
				}
				.page-weight-text-left{
					position: relative;
					left: -10/20rem;

				}

				.page-have-weight{
					display: block;
					height: 18/20rem;
					font-size: 14/20rem;
					line-height: 18/20rem;
					color: #8B572A;
					margin-bottom: 13/20rem;
					.fontWeight{
						color: #8B572A;
						font-size: 18/20rem; 
						font-weight:bold;
					}
				}
				.addBlod{
					font-weight:normal;
				}
				.p5_logo{
					width: 78/20rem;
					position: absolute;
					top: 227/20rem;
					right: 76/20rem;
				}
				.samll-span{
					width: 375/20rem;
					height: 12/20rem;
					display: block;
					line-height: 12/20rem;
					font-size: 12/20rem;
					margin-bottom: 6/20rem;
					color: #8B572A;
				}
				.p5_button{
					width: 166/20rem;
					position: absolute;
					top: 356/20rem;
					left: 105/20rem;
				}
				
				.marginTopOneOneTwo{
					margin-top: 112/20rem;
				}
				.marginThreeNine{
					margin-top: 39/20rem;
				}
				.marTop27{
					margin-top: 27/20rem;
				}
				.marBottom10{
					margin-bottom: 10/20rem;
				}
			}

			.page-item1{
				padding-left: 101/20rem;
				padding-top: 155/20rem;
			}
			.page-item2{
				padding-left: 83/20rem;
				padding-top: 125/20rem;
			}
			.page-item3{
				padding-left: 91/20rem;
				padding-top: 167/20rem;
			}
			.page-item4{
				padding-top: 151/20rem;
				text-align: center;
			}
			.page-item7{
				padding-left: 78/20rem;
				padding-top: 89/20rem;
			}
			.page-item8{
				padding-left: 101/20rem;
				padding-top: 171/20rem;
			}
			.page-item9{
				position: relative;
				text-align: center;
				.hot_class{
					position: absolute;
					width: 62/20rem;
					top: 15/20rem;
					left: 157/20rem;
				}
				.p9-back{
					position: relative;
					display: block;
					height: 202/20rem;
					margin: 0 auto;
					top: 172/20rem;
				}
				.img_wrap{
					width: 281/20rem;
					position: absolute;
					top: 68/20rem;
					left: 45/20rem;
				}
				.imgwrapAnimation{
					animation: wrapAnimation 1.5s ;
					-webkit-animation:wrapAnimation 1.5s ;
					-moz-animation:wrapAnimation 1.5s ;
					-o-animation:wrapAnimation 1.5s ;
				}
				@keyframes wrapAnimation{
					0% {width: 0;height: 0;top: 324/20rem;left: 50%;}
					100% {width: 281/20rem;top: 68/20rem;left: 45/20rem;}
				}
				@-webkit-keyframes wrapAnimation{
					0% {width: 0;height: 0;top: 324/20rem;left: 50%;}
					100% {width: 281/20rem;top: 68/20rem;left: 45/20rem;}
				}
				@-moz-keyframes wrapAnimation{
					0% {width: 0;height: 0;top: 324/20rem;left: 50%;}
					100% {width: 281/20rem;top: 68/20rem;left: 45/20rem;}
				}
				@-o-keyframes wrapAnimation{
					0% {width: 0;height: 0;top: 324/20rem;left: 50%;}
					100% {width: 281/20rem;top: 68/20rem;left: 45/20rem;}
				}
            	//词云上下浮动
            	.floatY{
            		animation: floatYAnimation 2s infinite;
            		-webkit-animation:floatYAnimation 2s infinite;
            		-moz-animation:floatYAnimation 2s infinite;
            		-o-animation:floatYAnimation 2s infinite;
            	}
            	@keyframes floatYAnimation{
            		0% {top: 68/20rem;transform: scale(1);}
            		10% {top: 68/20rem;transform: scale(1);}
            		50% {top: 58/20rem;transform: scale(1.04);}
            		60% {top: 58/20rem;transform: scale(1.04);}
            		100% {top: 68/20rem;transform: scale(1);}
            	}
            	@-webkit-keyframes floatYAnimation{
            		0% {top: 68/20rem;transform: scale(1);}
            		10% {top: 68/20rem;transform: scale(1);}
            		50% {top: 58/20rem;transform: scale(1.04);}
            		60% {top: 58/20rem;transform: scale(1.04);}
            		100% {top: 68/20rem;transform: scale(1);}
            	}
            	@-moz-keyframes floatYAnimation{
            		0% {top: 68/20rem;transform: scale(1);}
            		10% {top: 68/20rem;transform: scale(1);}
            		50% {top: 58/20rem;transform: scale(1.04);}
            		60% {top: 58/20rem;transform: scale(1.04);}
            		100% {top: 68/20rem;transform: scale(1);}
            	}
            	@-o-keyframes floatYAnimation{
            		0% {top: 68/20rem;transform: scale(1);}
            		10% {top: 68/20rem;transform: scale(1);}
            		50% {top: 58/20rem;transform: scale(1.04);}
            		60% {top: 58/20rem;transform: scale(1.04);}
            		100% {top: 68/20rem;transform: scale(1);}
            	}
            	//词云向下浮动
            	.floatDown{
            		animation: floatDownAnimation 2s infinite;
            		-webkit-animation:floatDownAnimation 2s infinite;
            		-moz-animation:floatDownAnimation 2s infinite;
            		-o-animation:floatDownAnimation 2s infinite;
            	}
            	@keyframes floatDownAnimation{
            		0% {top: 68/20rem;}
            		5% {top: 68/20rem;}
            		50% {top: 58/20rem;}
            		55% {top: 58/20rem;}
            		100% {top: 68/20rem;}
            	}
            	@-webkit-keyframes floatDownAnimation{
            		0% {top: 68/20rem;}
            		5% {top: 68/20rem;}
            		50% {top: 58/20rem;}
            		55% {top: 58/20rem;}
            		100% {top: 68/20rem;}
            	}
            	@-moz-keyframes floatDownAnimation{
            		0% {top: 68/20rem;}
            		5% {top: 68/20rem;}
            		50% {top: 58/20rem;}
            		55% {top: 58/20rem;}
            		100% {top: 68/20rem;}
            	}
            	@-o-keyframes floatDownAnimation{
            		0% {top: 68/20rem;}
            		5% {top: 68/20rem;}
            		50% {top: 58/20rem;}
            		55% {top: 58/20rem;}
            		100% {top: 68/20rem;}
            	}


            	.p9-font{
            		position: absolute;
            		display: block;
            		height: 132/20rem;
            		margin: 0 auto;
            		top: 242/20rem;
            		left: 149/40rem;
            	}
            	.p9_button{
            		width: 166/20rem;
            		position: absolute;
            		top: 400/20rem;
            		left: 105/20rem;
            	}
            	.clickButton{
            		animation: click 1s ;
            		-webkit-animation:click 1s ;
            		-moz-animation:click 1s ;
            		-o-animation:click 1s ;
            	}
            	 //点击选择愿望特效
            	 @keyframes click{
            	 	0% {width: 166/20rem;top: 420/20rem;opacity: 0;}
            	 	100% {width: 166/20rem;top: 400/20rem;opacity: 1;}
            	 }
            	 @-webkit-keyframes click{
            	 	0% {width: 166/20rem;top: 420/20rem;opacity: 0;}
            	 	100% {width: 166/20rem;top: 400/20rem;opacity: 1;}
            	 }
            	 @-moz-keyframes click{
            	 	0% {width: 166/20rem;top: 420/20rem;opacity: 0;}
            	 	100% {width: 166/20rem;top: 400/20rem;opacity: 1;}
            	 }
            	 @-o-keyframes click{
            	 	0% {width: 166/20rem;top: 420/20rem;opacity: 0;}
            	 	100% {width: 166/20rem;top: 400/20rem;opacity: 1;}
            	 }
            	 .p9_span_box{
            	 	position: absolute;
            	 	top: 485/20rem;
            	 	width: 100%;
            	 	text-align: center;
            	 	line-height: 17/20rem;
            	 	font-size: .6rem;
            	 	color: #fff;
            	 	.p9_span{
            	 		width: 100%;
            	 		height: 17/20rem;
            	 		display: block;
            	 	}
            	 }

            	}

			//信纸出现
			.pageShowAnimation{
				opacity: 1;
				animation: pageItemShow 0.7s ;
				-webkit-animation:pageItemShow 0.7s ;
				-moz-animation:pageItemShow 0.7s ;
				-o-animation:pageItemShow 0.7s ;
			}
			@keyframes pageItemShow{
				0% {opacity: 0;}
				100% {opacity: 1;}
			}
			@-webkit-keyframes pageItemShow{
				0% {opacity: 0;}
				100% {opacity: 1;}
			}
			@-moz-keyframes pageItemShow{
				0% {opacity: 0;}
				100% {opacity: 1;}
			}
			@-o-keyframes pageItemShow{
				0% {opacity: 0;}
				100% {opacity: 1;}
			}

			//信纸消失
			.pageHiddenAnimation{
				opacity: 0;
				animation: pageItemHidden 0.3s ;
				-webkit-animation:pageItemHidden 0.3s ;
				-moz-animation:pageItemHidden 0.3s ;
				-o-animation:pageItemHidden 0.3s ;
			}
			@keyframes pageItemHidden{
				0% {opacity: 1;}
				100% {opacity: 0;}
			}
			@-webkit-keyframes pageItemHidden{
				0% {opacity: 1;}
				100% {opacity: 0;}
			}
			@-moz-keyframes pageItemHidden{
				0% {opacity: 1;}
				100% {opacity: 0;}
			}
			@-o-keyframes pageItemHidden{
				0% {opacity: 1;}
				100% {opacity: 0;}
			}
		}
		//高度100%
		.fullHeight{
			height: 100%;
		}
	}
</style>
<script>
	import Vue from 'vue';
	import LivePost from '../../service/live';
	export default {
		data() {
			return {
				p1Flag:true,//首页显示
				dataFlag:true,//用户是否有数据
				contentFlag:false,//内容页显示
				Page1Class:{
					'content_page1Hidden':true,
				},//信纸1class
				Page2Class:{
					'content_page2Hidden':true,
        	    },//信纸2class
        	    litterClass:{
        	    	'content_litter_hidden':true,
            	},//小信封class
				slideFlag:false,//是否可以向上滑动
				page:1,//当前页
				pageFlag:false,//页面显示动效
				pageAnimation:'',//内容页显示动效
				pageNum:{
					'min':2,
					'max':5,
				},
				p9Float:false,
				username:'',
				registerTime:'',
				firstShareTime:'',
				firstClassPoster:'',
				classCount:0,
				moreMonth:'',
				moreMonthNum:'',
				classify:'',
				fullHeightFlag:false,
			}
		},
		created(){

		},
		components:{
		//组件
	},
	methods: {
		//调用方法
		//获取年终数据
		getData(){
			let _this = this;
			let w = document.body.clientWidth;
			let h = document.body.clientHeight;
			if(w/h<375/603){
				_this.fullHeightFlag = true;
			}
			LivePost.getYearData()
			.then(res => {
				_this.username = res.data.username.trim() != ''? res.data.username:'你';
				if(res.data.classStatInfo.length == 0){
					_this.dataFlag = false;
					_this.page = 6;
					_this.pageNum.min = 7;
					_this.pageNum.max = 9;
				}else{
					_this.dataFlag = true;
					_this.page = 1;
					_this.pageNum.min = 2;
					_this.pageNum.max = 5;
					let Info = res.data.classStatInfo;
					_this.registerTime = Info.rigister_time;
					_this.firstShareTime = Info.first_share_time;
					_this.firstClassPoster = Info.first_class_poster;
					_this.classCount = Info.user_all_class_num;
					_this.moreMonth = Info.class_max_month;
					_this.moreMonthNum = Info.class_max_month_num;
					_this.classify = Info.class_max_classify;	
				}
			})
			.catch(error => {
				if(error.data.code===400){
					window.location.href =APIMSG.weixapi+APIMSG.wxUrl+'/yearData';
				}
			})
			
			//微信端播放音频 
			var WeixinJSBridgeReady = document.addEventListener("WeixinJSBridgeReady", function () {
				let audio = document.getElementById('audio');
				audio.play();
			})
			if (WeixinJSBridgeReady && typeof (WeixinJSBridgeReady) == "function") {
				WeixinJSBridgeReady();
			}
		},
		//点击回忆我们的故事按钮
		goContent(){
			let _this = this;
			//隐藏第一页
			_this.p1Flag = false;
			_this.contentFlag = true;
			
			//出现信纸
			_this.Page1Class = {
				'content_page1Show':true,
				'page1Show_animation':true,
			}
			_this.Page2Class = {
				'content_page2Show':true,
				'page2Show_animation':true,
			}

			//延时0.5s出现小信封
			setTimeout(() => {
				_this.litterClass = {
					'content_litter_show':true,
					'litter_show_animation':true,
				}
			}, 500);

			//延时0.8秒出现内容，并且page+1
			setTimeout(() => {
				_this.pageAnimation = {
					'pageShowAnimation':true,
				}
				_this.page += 1;
			}, 800);
            //启动滑动手势
            setTimeout(() => {
            	_this.slideFlag = true;
            }, 1500);
        },
        //用户滑动页面
        Scrllo(){
        	let _this = this;
        	let yearData = _this.$refs.yearData;
        	let startY = 0;let endY = 0;let cha = 0;let xcha = 0;
        	let du = document.body.clientHeight * 0.05;

			 //touchStart事件
			 yearData.addEventListener('touchstart',function(event){
			 	startY = 0;endY = 0; cha = 0; xcha = 0;
			 	var touch = event.targetTouches[0];
			 	startY = touch.pageY;
			 },false);

            //touchmove事件
            yearData.addEventListener('touchmove',function(event){
            	var touch = event.targetTouches[0];
            	endY = touch.pageY;
            	//阻止浏览器事件
            	// event.preventDefault();
            },false);

            //touchend事件
            yearData.addEventListener('touchend',function(event){
            	if(endY == 0){
            		return;
            	}
            	//向上翻
            	cha = startY - endY ;//向上滑比较值
            	if(cha  > du && _this.slideFlag){
            		_this.slideFlag = false;
            		if(_this.page < _this.pageNum.max){
            			_this.slidePage(1);
            		}else{
            			_this.slideFlag = true;
            			console.log("已经是最后一页了");
            		}
            	}
                //向下翻
                xcha = endY - startY ;
                if(xcha > du && _this.slideFlag){
                	_this.slideFlag = false;
                	if(_this.page == _this.pageNum.min ){
                		_this.p1Flag = true;
                		_this.contentFlag = false;
                		_this.page = _this.page -1;
                		console.log("打开第一页");
                	}else{
                		_this.slidePage(0);
                	}
                }
            },false);
        },
        //翻页逻辑
        slidePage(type){
        	let _this = this;
        	//隐藏
        	_this.Page1Class = {
        		'content_page1Hidden':true,
        		'page1Hideen_animation':true,
        	}
        	_this.Page2Class = {
        		'content_page2Hidden':true,
        		'page2Hideen_animation':true,
        	}
        	_this.litterClass = {
        		'content_litter_hidden':true,
        		'litter_hidden_animation':true,
        	}
        	_this.pageAnimation = {
        		'pageHiddenAnimation':true,
        	}
        	//1s钟后重新出现
        	setTimeout(() => {
        		//除第八页外要加翻页动画
        		if(_this.page != 8 ||(_this.page == 8 && type!=1)){
        			_this.Page1Class = {
        				'content_page1Show':true,
        				'page1Show_animation':true,
        			}
        			_this.Page2Class = {
        				'content_page2Show':true,
        				'page2Show_animation':true,
        			}
        			setTimeout(() => {
        				_this.litterClass = {
        					'content_litter_show':true,
        					'litter_show_animation':true,
        				}
        			}, 500);
        		}else{
        			//第八页的动画
        			setTimeout(() => {
        				_this.p9Float = true;
        			}, 2000);
        		}

            	//延时0.8秒出现内容
            	let times = _this.page == 8&&type==1?100:800;
            	setTimeout(() => {
            		if(type!=1&&_this.page == 9){
            			_this.p9Float = false;
            		}
            		
            		if(_this.page == 3 && _this.moreMonthNum < 2 && type == 1){
            			_this.page +=2;
            		} else if(_this.page == 5 && _this.moreMonthNum < 2 && type == 0){
            			_this.page -=2;
            		} else {
            			_this.page = type == 1?_this.page + 1:_this.page - 1;
            		}

            		console.log("当前页"+_this.page);
            		_this.pageAnimation = {
            			'pageShowAnimation':true,
            		}
            	}, times);

        		//动画显示完全，可以上滑翻页
        		setTimeout(() => {
        			_this.slideFlag = true;
        		}, 1500);
        	}, 500);
        },
        //去选角色页面
        selectRole(){
        	let _this = this;
        	window.location.href = APIMSG.wxUrl + '/selectRole';
        },
        //禁止分享
        share(){
        	let _this =this;
        	var params = {
        		"url":window.location.href
        	};
        	LivePost.getWxJsConfig(params)
        	.then(res => {
        		wx.config({
        			debug:false,
        			appId:res.data.appId,
        			timestamp:res.data.timestamp,
        			nonceStr: res.data.nonceStr,
        			signature: res.data.signature,
        			jsApiList: ['hideMenuItems']
        		});
        		wx.ready(function () {
        			wx.hideMenuItems({
        				menuList: [
        				'menuItem:share:qq',
        				'menuItem:share:weiboApp',
        				'menuItem:share:QZone',
        				'menuItem:share:appMessage',
        				'menuItem:share:timeline',
        				]
        			});
        		});
        	})
        	.catch(error => {
        	})
        },
        aa(){
        	let el = document.getElementById('yearData');
        	var overscroll = function() {
        		el.addEventListener('touchstart', function() {
        			var top = el.scrollTop
        			, totalScroll = el.scrollHeight
        			, currentScroll = top + el.offsetHeight
        			if(top === 0) {
        				el.scrollTop = 1
        			} else if(currentScroll === totalScroll) {
        				el.scrollTop = top - 1
        			}
        		})
        		el.addEventListener('touchmove', function(evt) {
        			if(el.offsetHeight < el.scrollHeight)
        				evt._isScroller = true
        		})
        	}
        	overscroll(document.querySelector('.scroll'));
        	document.body.addEventListener('touchmove', function(evt) {

        		if(!evt._isScroller) {
        			evt.preventDefault()
        		}
        	})
        }
    },
    mounted(){
    	this.aa();
    	this.Scrllo();
    	this.getData();
    	this.share();
    }
}
</script>
