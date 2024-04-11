import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

type BaseProps = {
  children: ReactNode;
  textOnly?: boolean;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  BaseProps & { to?: never };
type ButtonLinkProps = LinkProps & BaseProps & { to: string };

function isRouterLink(
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
  return "to" in props;
}

export default function Button(props: ButtonProps | ButtonLinkProps) {
  if (isRouterLink(props)) {
    const { children, textOnly, ...otherProps } = props;
    return (
      <StyledLink textOnly={textOnly} {...otherProps}>
        {children}
      </StyledLink>
    );
  }
  const { children, textOnly, ...otherProps } = props;

  return (
    <StyledButton textOnly={textOnly} {...otherProps}>
      {children}
    </StyledButton>
  );
}

const textOnlyStyle = `
  background-color: transparent;
  color: #ccb2f6;
  &:hover,
  :active {
    color: #b592ed;
  }
`;

const StyledButton = styled.button<{ textOnly?: boolean }>`
  background-color: #b68ef7;
  color: #0a0218;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  text-decoration: none;
  font: inherit;
  &:hover,
  :active {
    background-color: #a16cf7;
  }
  ${(props) => (props?.textOnly ? `${textOnlyStyle}` : "")};
`;

const StyledLink = styled(Link)<{ textOnly?: boolean }>`
  background-color: #b68ef7;
  color: #0a0218;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  text-decoration: none;
  font: inherit;
  &:hover,
  :active {
    background-color: #a16cf7;
  }
  ${(props) => (props?.textOnly ? `${textOnlyStyle}` : "")};
`;
