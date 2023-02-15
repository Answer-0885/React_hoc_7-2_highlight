const New = (props) => {
    return (
      <div className="wrap-item wrap-item-new">
        <span className="label">Новинка</span>
        {props.children}
      </div>
    );
  }
  export default New;