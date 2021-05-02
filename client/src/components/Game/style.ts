import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({ 
    app: {
        display: 'inline-block',
        margin: '20px auto',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },
    buttonContainer: {
        alignItems: 'center',
        textAlign: 'center',
    }
}))

export default useStyles