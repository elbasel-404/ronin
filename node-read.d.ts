declare module 'node-read' {
  interface Article {
    title: string;
    content: string;
    html: string;
    dom: string;
  }

  function read(url: string, callback: (err: any, article: Article, res: Response) => void): void;

  export = read;
}