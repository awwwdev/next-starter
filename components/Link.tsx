import NextLink from "next/link";
import { useRouter } from "next/router";
import type { LinkProps } from "next/link";

const Link = (props: LinkProps & { children: React.ReactNode; className?: string }) => {
  const router = useRouter();
  let isInPath = props.href === router?.asPath;
  let isInSubPath = isInPath === false && router?.asPath?.startsWith(props.href as string);
  if (isInPath) return <NextLink {...props} data-in-path />;
  if (isInSubPath) return <NextLink {...props} data-in-sub-path />;
  return <NextLink {...props} />;
};

export default Link;
