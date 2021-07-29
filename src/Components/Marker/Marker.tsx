import styles from "./Marker.module.css"


function Marker(props: any) {
    const { color, name, id, } = props;
    function hide(){
        
    }
    return (
        <div
        className={styles.pin}
        style={{ backgroundColor: color, cursor: 'pointer' }}
        title={name}
        onClick={() => {
            hide();
         }}
      >
        
          <div className={styles.modal} style={{width:"200px"}}>
  <img className="card-img-top" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?width=982&height=726&auto=webp&quality=75"style={{borderRadius:"10px"}}></img>
  <div className="card-body">
    <h4 className="card-title">John Doe</h4>
    <p className="card-text">Some example text.</p>
    
  </div>
</div>
        </div>
  
    );
  }
  
  export default Marker;
  