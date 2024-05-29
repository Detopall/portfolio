# Internship - 2024 - ML6

`Date: 12-02-2024 until 24-05-2024`

![internship-2024](../assets/images/blogs/internship-2024.png)

## Introduction

For the internship course at my college, I had to choose out a company to work for. I had no idea where to look, but luckily our school planned a day for all the potential companies to present themselves. One of the only companies present that had something to do with AI was ML6.

ML6 is a consultancy firm that focuses on IT solutions, with a heavy emphasis on AI. This is it. This company has an immense focus on AI, technology and creating projects for other companies. I immediately applied for a position as an intern for ML6. Choosing between the different projects was a bit harder, but I landed on "AI in Bio". The internship lasted from the 12th of February until the 24th of May.

My mentor for this internship was Pieter Coussement. Pieter is a schooled biotechnician, obtaining a PhD in systems and synthetic biology at UGent. As a squad lead, Pieter guides a diverse team of machine learning and software engineers, project managers and customer engineers for ML6.

Medga Hegde and Sharon Grundmann also helped me during this internship.

## AI in Bio

During my internship at ML6, I had the opportunity to work on the [deCYPher project](decypher.bio), which involved developing an AI solution that fit into the DBTL (Design-Build-Test-Learn) cycle for biological applications. This was a perfect fit for me, as I had above-average marks in biology tests during high school and was eager to apply my knowledge in a real-world setting.

I had to build a pipeline that calculated features from protein sequences. To do this, I used [Fondant](fondant.ai).

## Fondant

Fondant is a data processing framework that converts blocks of code (components) into Docker containers. These Docker containers can then be run individually or sequentially in a pipeline, transforming the dataset to your needs. One of the reasons that Fondant was chosen as the framework to develop this pipeline was due to its modularity and flexibility. Each component in the Fondant pipeline is responsible for a specific task, such as loading data from the Hugging Face Hub, processing protein sequences, or calculating various features. By breaking down the pipeline into these modular components, it becomes easier to maintain, test, and swap out individual parts as needed. For example, the pipeline I built using Fondant included components for:

- Loading protein sequence data
- Preprocessing and cleaning the sequences
- Calculating physicochemical properties of the proteins
- Generating embeddings using language models like ESMFold
- Outputting the transformed dataset

The beauty of Fondant is that each of these components runs in its own Docker container. This means that even users with less technical skills can easily run the pipeline by simply executing the Docker containers, without needing to worry about the underlying code or environment setup. Additionally, Fondant's modular design allows for easy experimentation and iteration. If I wanted to try a different feature engineering technique or use a different language model, I could simply swap out the corresponding component in the pipeline. This flexibility was crucial in allowing me to explore various approaches and find the optimal solution for the deCYPher project.

These features were then used as inputs to various machine learning models, which were trained to predict properties of interest for the deCYPher project, such as enzyme function or protein stability. By leveraging Fondant's modular design and Docker-based components, I was able to efficiently process large amounts of protein data and experiment with different feature engineering techniques. This allowed me to gain valuable insights and develop robust AI solutions that fit into the DBTL cycle for biological applications.

## Proof Of Concept

During my internship I also worked on my Proof Of Concept for my bachelor dissertation. This POC included using the pipeline with the created components to create a specific dataset. This dataset was then used in a regression model to predict a certain feature. The goal of this POC was to see if it was possible to predict a certain feature by using very simple components that I created. The regression model could predict this feature with a 78% accuracy.

## Learnings

My internship at ML6 has been a transformative experience, shaping my understanding of the AI industry and its applications in the biotech sector. I've learned the importance of adaptability, attention to detail, and effective communication when working on complex, interdisciplinary projects.

Moving forward, I'm excited to continue exploring the possibilities of AI. My internship has solidified my passion for this field and has inspired me to pursue a masters degree in AI at the University of Gent. I'm eager to build upon the skills and knowledge I've gained, and to contribute to the development of innovative technologies that can positively impact people's lives.

## Conclusion

I am incredibly grateful for the opportunity to have interned at ML6. The experience has been invaluable, allowing me to apply my academic knowledge in a real-world setting, develop new skills, and gain a deeper understanding of the AI industry. I would like to express my sincere appreciation to Pieter Coussement, Medha Hegde and Sharon Grundmann and the ML6 team for their guidance, support, and for providing me with such a rewarding and enriching internship experience.

## Sources

[ML6](https://ml6.eu)

[Medha Hegde](https://be.linkedin.com/in/medha-hegde-950551235)

[Pieter Coussement](https://be.linkedin.com/in/pietercoussement)

[Sharon Grundmann](https://nl.linkedin.com/in/sharon-grundmann-05ab9816b)

[deCYPher](https://decypher.bio)

[Fondant](https://fondant.ai)
