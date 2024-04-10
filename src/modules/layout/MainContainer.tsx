
interface Props {
    children: React.ReactNode;
  }

const MainContainer = (props: Props) => {
    return(
        <div>
            {props.children}
        </div>
    )
}

export default MainContainer;