import {createUseStyles} from 'react-jss'

const BlockStyles = createUseStyles({
    BlockContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "80%",
        margin: "auto",
        backgroundColor: "#1C1E53",
        padding: "0"
    },

    BlockImage: {
        width: "auto",
        height: "auto"
    },

    BlockDescription : {
        width: "auto",
        margin: "auto",
        paddingBottom: "20px"
    },

    '@media (min-width: 690px)': {
        BlockDescription: {
          width: "40%"
        }
      }

})

export default function Block({ image, title, text, children }) {
    const classes = BlockStyles()
    return (
        <div class="block">
            <div class={classes.BlockContainer}>
                <div className="conteiner-block-image">
                    <img className={classes.BlockImage} src={image} alt="img" />
                </div>
                <div className={classes.BlockDescription}>
                    <div className='styles-description'>
                        <h3>{title}</h3>
                        <p>{text}</p>
                        
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}