import React from "react";
import Video from "./Video";
import Popular from "./Popular";
import New from "./New";
import Article from "./Article";

const ListHOC = (props) => {

    const withHighlight = (highlight) => (Component) => class extends React.Component {
        render() {
          const HighlightedComponent = (typeof highlight === 'function') ? highlight(this.props) : highlight;
          if (HighlightedComponent) {
            return <HighlightedComponent><Component {...this.props}/></HighlightedComponent>
          }
          return <Component {...this.props}/>
        }
      }


    const HighlightedVideo = withHighlight(highlight)(Video);
    const HighlightedArticle = withHighlight(highlight)(Article);


    function highlight({ views }) {
        if (views < 100) return New;
        if (views >= 1000) return Popular;
        return null;
      }

    return props.list.map((item, index) => {
      switch (item.type) {
        case "video":
          return <HighlightedVideo {...item} key={index}/>;
  
        case "article":
          return <HighlightedArticle {...item} key={index}/>;
      }
    });
  }
  export default ListHOC;