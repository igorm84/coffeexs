# Coffeexs
Coffeexs is a minimalist boilerplate that seamlessly integrates Express, essential components, and TypeScript. Built with simplicity in mind, it empowers developers to embark on their own projects easily making changes but still with some foundation and guide.


> [!WARNING]
> This is a initial version and isn't suitable for production yet, but feel free to take a look

## Features
- [x] Express and essentials
- [x] Routing — *path based route*
- [x] Validation with express-validator
- [ ] Integration with ORMs like Prisma
- [ ] Logging
- [ ] CLI utility

## Routing
Introducing a new way to route express apps with file name convetions for simplicity and dynamic routing

A folder structure of `/espresso/[name]` will route to `/espresso/1` with **req.params.name**
```typescript
export const GET = (req: Req, res: Res) => {
  return res.status(200).json({
    message: "Tried to look for " + name,
    params: req.params,
  });
};
```
You can segment the routes as many times as you want, like `/espresso/[name]/[aroma]/[acidity]` and so on...

## Deploy
*I'll be working in a guide for deploying in many ways and usage with serveless and microservices*

## License
Licensed under the MIT License. Check [LICENSE](./LICENSE) for details
