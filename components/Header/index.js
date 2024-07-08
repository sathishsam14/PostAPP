import {
  NavContainer,
  ListItem,
  ButtonElement,
  ImageElement,
  ListContainer,
} from "./styledComponents.js";

const Header = () => (
  <NavContainer>
    <div>
      <ImageElement
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFoAQHsuV9rDx2p5jGsv1Js9ljnB0VsaApUQ&s"
        alt="image"
      />
    </div>
    <ListContainer>
      <ListItem>Home</ListItem>
      <ListItem>Post</ListItem>
      <ListItem>Notifications</ListItem>
    </ListContainer>
    <ButtonElement>Logout</ButtonElement>
  </NavContainer>
);

export default Header;
