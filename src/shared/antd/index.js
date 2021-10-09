import { Layout, Menu, Comment, Avatar, Card, Tooltip } from "ant-design-vue";

export default (app) => {
  app.use(Layout)
  app.use(Menu)
  app.use(Comment)
  app.use(Avatar)
  app.use(Card)
  app.use(Tooltip)
}