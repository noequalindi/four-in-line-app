import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({ 
    groove: {
        width: '80px',
        height: '80px',
        border: 'solid 10px #4F2876',
        borderRadius: '100%',
        backgroundColor: 'white',
      },
      
      circle: {
        width: '60px',
        height: '60px',
        borderRadius: '100%',
        backgroundColor: 'white'
      },
      
      yellow: {
        backgroundColor: '#FFCB53'
      },
      
      red: {
        backgroundColor: '#FF5743'
      },
}))

export default useStyles