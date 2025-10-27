// global.d.ts
declare module "*.css";
declare module "*.scss";
declare module "*.sass";

// If you use CSS Modules, add these as well:
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
