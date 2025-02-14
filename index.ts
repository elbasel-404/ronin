// // import read from "node-read";
// import { file, write } from "bun";
// import { input } from "@inquirer/prompts";
// import { getAiResponse } from "./getAiResponse";

// // const TurndownService = require("turndown");
// // const turndownService = new TurndownService();
// // const url = "https://wiki.archlinux.org/title/Installation_guide";

// // const fetchResponse = await fetch(url);
// // const html = await fetchResponse.text();
// // const markdown = turndownService.turndown(html);
// // const path = "arch_linux_installation_guide.md";
// // const mdFile = file("data/" + path);
// // await write(mdFile, markdown);

// const userPrompt = await input({ message: ">>>" });

// const googleSearchPage = await getAiResponse(
//   "reply with a google search url for the following prompt, don't use the prompt as-is, modify it so that the google search is more relevent to the user's question,only reply with the url and nothing else!:",
//   userPrompt
// );
// console.log({ googleSearchPage });

// // const googleSearchResults = await fetch(googleSearchPage, {
// //   redirect: "manual",
// //   method: "GET",
// //   headers: {
// //     "Content-Type": "text/html",
// //     "User-Agent":
// //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
// //   },
// // });

// // const googleSearchHtml = await googleSearchResults.text();
// // const googleSearchPath = "google_search_results.html";
// // const googleSearchMdFile = file("data/" + googleSearchPath);
// // await write(googleSearchMdFile, googleSearchHtml);
// // const googleSearchMarkdown = turndownService.turndown(googleSearchHtml);
// // const googleSearchMdFile = file("data/" + googleSearchPath);
// // await write(googleSearchMdFile, googleSearchMarkdown);

// console.log({ googleSearchPage });
// // const aiResponse = await getAiResponse(userPrompt, markdown);
// // console.log(aiResponse);

// // console.log(markdown);
// // console.log(markdown);
// // type Article = {
// //   title: string;
// //   content: string;
// //   html: string;
// //   dom: string;
// // };

// // read(url, function (err: Error, article: Article, res: Response) {
// // const { title, content } = article;
// // Main Article.
// // console.log(article.content);
// // const markdown = turndownService.turndown(article.html);
// // const path = title.trim().replaceAll(" ", "_").toLowerCase() + ".md";
// // const mdFile = file(path);
// // write("data/" + mdFile, markdown);
// // console.log(markdown);

// // Title
// // console.log(article.title);

// // HTML
// // console.log(article.html);

// // DOM
// // console.log(article.dom);
// // });
