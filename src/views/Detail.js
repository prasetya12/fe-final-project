import React,{Component,useState,useEffect} from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Button from '@material-ui/core/Button';
import RowBook from '../components/RowBook'
import {oneBook} from '../store/actions/booksAction' 
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'





const useStyles = makeStyles(theme=>({
	container:{
        paddingRight:'10%',
        paddingTop:'8%',
        paddingLeft:'10%',
        paddingBottom:'8%',
        alignItems:'center',
        display:'flex',
        // flexDirection:'column',
        backgroundColor:'#F5F5F5'
    },
}))


function Detail(props){
    const classes = useStyles();
    const [count, setCount] = useState(1);
    const path = window.location.pathname.split('/')

    const id = path[2]


    React.useEffect(()=>{
        props.oneBook(id)
        
      }, [])
    if(!window.localStorage.getItem('token')) return <Redirect to ='/login'/>
	return(
		<Grid container className={classes.container}>
			<Grid container xs={12} style={{height:'100%',backgroundColor:'white',padding:'2%'}}>
				<Grid container xs={12} style={{height:350}}>
					<Grid item xs={3} style={{height:'100%',justifyContent:'center',display:'flex'}}>
                    	<img src={require('../assets/buku.jpg')} style={{height:'100%'}}/>
						
					</Grid>
					<Grid item xs={6} style={{height:'100%',display:'flex',flexDirection:'column'}}>
						<Typography variant="h4" component="h2">
						Buku Aktivitas Si Kecil : Dunia Anak
						</Typography>
						<Typography color={'textSecondary'} variant="h5" component="h5" style={{marginTop:10}}>
						Tereliye
						</Typography>
						<Typography variant="h4" component="h5" style={{marginTop:'20%',color:'#12AFC0'}}>
						Rp.120.000
						</Typography>
					</Grid>
					<Grid item xs={3}  style={{height:'100%',padding:'1%'}}>
						<Grid style={{height:'100%',width:'100%'}}>
							<Grid container style={{height:'20%',alignItems : 'center'}}>
								<LocalShippingIcon style={{fontSize:40,color:'#f50057'}}/>
								<Typography variant="h6" style={{marginLeft :20}} color={'textSecondary'} component="h5">
								Free Shipping
								</Typography>
							</Grid>
							<Grid container style={{width:'100%',height:'20%',marginTop:20,alignItems:'center',paddingRight:50,paddingLeft:50}}>
									<Grid item xs={4} style={{justifyContent:'center',display:'flex'}}>
										<Button variant="contained" onClick={() => count>=1?setCount(count - 1):1}>-</Button>
									</Grid>
									<Grid item xs={4} style={{justifyContent:'center',justifyContent:'center',display:'flex'}}>
										<h4>{count}</h4>
									</Grid>
									<Grid item xs={4} style={{justifyContent:'center',display:'flex'}}>
										<Button variant="contained" onClick={() =>setCount(count + 1)} >+</Button>
									</Grid>

							</Grid>	
							<Grid style={{marginTop:30}}>
								<Button variant="contained" style={{ width:'100%',height:40,backgroundColor:'#12AFC0'}}>Add Cart</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid container xs={12} style={{height:'100%',backgroundColor:'white',padding:'5%'}}>
				<h3>
					Sinopsis
				</h3>
				<h4 style={{fontWeight : '300',lineHeight : 2}}>
					Film ayat-ayat cinta ini diangkat dari novel karangan Habiburrahman El Shirazy.

Mengisahkan tentang seorang pemuda indonesia yang bernama Fahri.

Berasal dari keluarga sederhana dan sedang berkuliah S2 di universitas Al-Azhar mesir.

Film ayat-ayat cinta ini diperankan oleh empat pemain utama.

Yaitu Fedi Nuril (Garasi mengejar sang surya) berperan sebagai Fahri.

Rianti Cartwright (Pesan dari Surga) berperan sebagai Aisha.

Carissa Puteri sebagai Maria dan Zaskia Adya Mecca berperan sebagai Noura, dan Melania Putria sebagai Nurul.

Fahri dalam film ini diterangkan sebagai seorang pemuda yang aktif dalam berorganisasi islam dan mempunyai iman yang kuat.

Selai kerajinannya Fahri juga di hadapkan dalam permasalahan jodoh.

Yang orang tuanya memintanya untuk menikah, akan tetapi Fahri sendiri masih linglung akan persepsi jodoh.

Meskipun banyak sekali diantara kawan-kawan Fahri yang mengucapkan cintanya via surat terhadap Fahri.

Namun Fahri masih merasa belum menemukan alternatif Allah untuknya.

Fahri bertempat tinggal di lantai satu di Mesir bersamaan dengan tiga orang kawan laki-laki.

Fahri mempunyai tetangga di lantai tiga, yakni seorang wanita Mesir bernama Maria.
				</h4>
			</Grid>
			<h3 style={{marginTop:30}}>Recomendation</h3>
			
		</Grid>
	)
}


const mapStateToProps = (state)=>{
  return{
    books:state.books
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    oneBook:(id)=>dispatch(oneBook(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail)

