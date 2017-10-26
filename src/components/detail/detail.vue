<template>
	<div>
				<!--  顶部信息 	-->
		<div class="header">
			埃森商城
				<div class="back">
					<a href="javascript:history.go(-1)">
						<img src="http://www.esenmall.com/Areas/Mobile/Themes/M1/Content/new/images/icon_back.png">
					</a>
				</div>
				<div class="home"><img width="26px" height="23.11px" src="../../images/icon_home.png"></div>
		</div>

		<!-- content目录 -->
		<div class="content">
			<div class="banner">
				<div class="myLeft">
					<img src="../../images/icon_banner.png">
					<div class="blank"></div>
					<span v-for="machine in machines" class="product">{{machine.title}}</span>
				</div>
			</div>
			<ul class="ul_list">
				<li v-for="machine in machines">
					<div class="prt_pic">
						<img :src=" 'images/' + machine.images[0].image_name ">
					</div>
				    <div class="prt_icon">
						<img src="http://www.esenmall.com/Areas/Mobile/Themes/M1/Content/new/images/icon_list.png">
					</div>
					<span class="prt_title">{{machine.name}}</span>
					<span class="prt_font">{{machine.brand}}</span>
				</li>
			</ul>
			<div class="copyright">
				Copyright © 2013-2020 Essen Mall All Rights Reserved
				<br>
				技术支持：鼎联网络科技
			</div>	
		</div>
		<!-- {{$route.params.id}} -->
	</div>
</template>

<script type="text/javascript">
import axios from "axios";
	export default{
		data(){
			return {
				machines:[]
			}
		},

		created:function(){
			 axios.get(`../../../static/${this.$route.params.id}.json`)
        .then( (response)=> {
           this.machines = response.data.data;
           //console.log(this.machines[0].images[0].image_name);
          })
            .catch((error)=> {
            console.log(error);
        });
		}
	}
</script>


<style type="text/css">
	.header{
		position: relative;
	    width: 100%;
	    height: 2.4rem;
	    background: #b71b2c;
	    text-align: center;
	    line-height: 2.4rem;
	    font-size: 1.0rem;
	    font-weight: 600;
	    color: #FFFFFF;
	}

	*{
		margin: 0;
		padding: 0
	}

	.back{
		position: absolute;
	    width: 1.8rem;
	    height: auto;
	    overflow: hidden;
	    top: 0.6rem;
	    left: 0.9rem;
	}
	.back img{
		display: block;
		width:26px;
	    height:22.14px;
	}
	.banner{
		width: 100%;
		height: auto;
		background-image:url('../../images/banner.png');
		background-size:100% 104.16px;
		border-bottom: 1px solid #b1b1b1;
	}

	.home{
		position: absolute;
	    width: 1.6rem;
	    height: auto;
	    overflow: hidden;
	    top: 0.4rem;
	    right: 0.9rem;
	}
	.myLeft>img{
		width: 100%;
		height: auto;
		vertical-align: middle;
	}

	.myLeft{
		width: 35.4%;
		height: 104.16px;
		line-height: 104.16px;
		position: relative;
	}

	.blank{
		width: 2px;
		height: 36%;
		background: white; 
		position:absolute;
		top:32%;
		left:15%;

	}

	.product{
		position: absolute;
		top: 0;
		left:30%;
		color: white;
		font-weight: 600
	}

	.content{
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	.ul_list{
		width: 100%;
		height: auto;
		overflow: hidden;
		padding: 0.1rem 0;
	}
	.ul_list li{
		position: relative;
	    width: auto;
	    padding: 0 2.0rem 0 3.5rem;
	    height: 3.0rem;
	    background: #ffffff;
	    border-bottom: 1px solid #b1b1b1;
	}
	.prt_pic{
		position: absolute;
	    width: 2.2rem;
	    height: 2.2rem;
	    border-radius: 0.25rem;
	    top: 0.3rem;
	    left: 0.4rem;
	    border: 1px solid #CCCCCC;
	    padding: 0.1rem;
	}
	.prt_pic img{
		max-width: 100%;
		vertical-align: middle;
	}
	.prt_icon{
		position: absolute;
	    width: 1.2rem;
	    height: 1.2rem;
	    overflow: hidden;
	    top: 1.1rem;
	    right: 0.9rem;
	}
	.prt_icon img{
		max-width: 100%;
	}
	.prt_title{
		width: 100%;
		height: 1.2rem;
		line-height: 1.2rem;
		font-size: 0.7rem;
		font-weight: bold;
		text-align: left;
		color: #333;
	}

	.prt_font{
		display: block;
		width: 100%;
		height: 1.2rem;
		line-height: 1.2rem;
		font-size: 0.7rem;
		font-weight: lighter;
		text-align: left;
		color: #666;
		overflow: hidden;
	}

	.copyright{
		width: 250px;
	    height: auto;
	    bottom: 0.5rem;
	    margin: 0px auto;
	    font-size: 0.7rem;
	    font-weight: lighter;
	    line-height: 1.5rem;
	    text-align: center;
	    color: #999999;
	    padding: 0.5rem;
	}
</style>








