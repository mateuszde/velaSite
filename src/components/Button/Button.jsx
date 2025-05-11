import {
  StyledNavButton,
  PrimaryButton,
  SecondaryButton,
  SmallButton,
} from "./style";
import { fetchFile } from "../../utilites/fetchFile";

const Button = ({
  children,
  navigation,
  primary,
  secondary,
  small,
  downloadFile,
  ...props
}) => {
  return (
    <>
      {navigation && (
        <StyledNavButton {...props}>
          <p>{children}</p>
        </StyledNavButton>
      )}

      {primary && (
        <PrimaryButton {...props}>
          <p>{children}</p>
        </PrimaryButton>
      )}

      {secondary && (
        <SecondaryButton {...props}>
          <p>{children}</p>
        </SecondaryButton>
      )}

      {small && (
        <SmallButton onClick={() => fetchFile(downloadFile)} {...props}>
          <p>{children}</p>
        </SmallButton>
      )}
    </>
  );
};

export default Button;
