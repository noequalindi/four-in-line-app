import React from "react"
import Alert from '@material-ui/lab/Alert';

const Redirect: React.FC = () => {
    return (
      <Alert variant="filled" severity="error">
        There was an error with the URL!
      </Alert>
    )
}
export default Redirect;