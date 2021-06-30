import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, TextField, Button, AppBar, Toolbar } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    mainContent: {
        display: 'flex',
        justifyContent: 'center',
        padding: '3vw'
    }
}))

export default function Buscador(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState({})
    const [data, setData] = React.useState({
        cep: "",
        logradouro: "",
        bairro: "",
        complemento: "",
    })

    // const onSearch = () => {
    //     console.log(data)
    // }

    const showData = (result) => {
        for (let campo in result) {
            if (document.querySelector("#" + campo)) {
                document.querySelector("#" + campo).value = result[campo]
            }
        }
    }

    const onBlurCep = (e) => {
        const { value } = e.target
        const cep = value?.replace(/[^0-9]/g, '')

        if (cep?.length !== 8) {
            return;
        }
        console.log(value)
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => showData(data))
    }

    return (
        <React.Fragment>
            <AppBar position="static" >
                <Toolbar className={classes.appBar}>
                    <Grid></Grid>
                    <Typography variant="h6" gutterBottom>
                        Busca Cep
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => { props.setAuth(false) }}
                    >Logout</Button>
                </Toolbar>
            </AppBar>

            <Grid>
                <Grid container spacing={3} className={classes.mainContent}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="cep"
                            name="cep"
                            label="Cep"
                            rowsMax={'8'}
                            // onBlur={(e) => { console.log(e.target.value) }}
                            onBlur={onBlurCep}
                            fullWidth

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="logradouro"
                            name="logradouro"
                            label="Logradouro/Rua"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="bairro"
                            name="bairro"
                            label="Bairro"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="localidade"
                            name="localidade"
                            label="Cidade"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="uf"
                            name="uf"
                            label="UF"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="complemento"
                            name="complemento"
                            label="Complemento"
                            fullWidth
                        />
                    </Grid>
                    {/* <Button
                        variant="contained"
                        color="primary"
                        onClick={onSearch}
                    >
                        Buscar
                    </Button> */}
                </Grid>
            </Grid>
        </React.Fragment>
    );
}