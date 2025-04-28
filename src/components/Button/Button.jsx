import {
  StyledNavButton,
  PrimaryButton,
  SecondaryButton,
  SmallButton,
} from "./style";

const Button = ({
  children,
  navigation,
  primary,
  secondary,
  small,
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
        <SmallButton {...props}>
          <p>{children}</p>
        </SmallButton>
      )}
    </>
  );
};

export default Button;
