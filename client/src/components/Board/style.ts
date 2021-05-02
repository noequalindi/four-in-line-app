import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({ 
    board: {
        display: 'flex',
        flexDirection: 'row',
        border: 'solid 8px #4F2876',
        borderRadius: '5px',
        backgroundColor: '#45216A',
      },
      
    columns: {
        display: 'flex',
        flexDirection: 'row'
    }
    
}))

export default useStyles