
import { makeStyles,createStyles } from "@material-ui/core";

export default makeStyles(()=>createStyles({
    bookContainerComponent:{
        height: '100%',
        width: '100%',
        display:'flex',
        alignItems:'center',
        // justifyContent:'center',
        flexDirection:'column',
        backGroundColor:'blue'
    }
}))