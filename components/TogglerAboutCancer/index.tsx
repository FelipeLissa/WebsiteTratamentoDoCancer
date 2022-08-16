import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useRef, useState } from 'react';
import { BsFillChatRightTextFill } from 'react-icons/bs';
import { ToggleStyled } from './styles';




function TogglerAboutCancer(props: { subtitle: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {

  const [Toggled, setToggled] = useState(false)
  const handleToggle = () => { setToggled((prevState) => !prevState) }

  const parentRef = useRef<HTMLDivElement>(null);



  return (
    <ToggleStyled>


      <div onClick={handleToggle} className='style'>
        <h4 > <BsFillChatRightTextFill /> {props.title}  <a>{props.subtitle}</a></h4>

        <div className="content-parent"
          ref={parentRef}
          style={Toggled
            ? { height: parentRef.current?.scrollHeight + "px" }
            : { height: "0px" }
          }>
          <div className="content">{props.children}</div>
        </div>


      </div>

    </ToggleStyled>


  );
}
export default TogglerAboutCancer
