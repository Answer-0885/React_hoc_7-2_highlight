const Popular = (props) => {
    return (
      <div className="wrap-item wrap-item-popular">
        <span className="label">Популярное</span>
        {props.children}
      </div>
    );
  }
  export default Popular;