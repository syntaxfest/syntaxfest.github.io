---
layout: sofia
title: Home
---

<!-- * TOC
{:toc} -->

# The Syntaxfest 2021 in Sofia (will be held from 21 March to 24 March 2022)

### 4 events for 1 Fest of Empirical Syntax

 The second edition of the SyntaxFest brings together again four events with partially overlapping research topics including empirical syntax, linguistic annotation, statistical language analysis, and Natural Language Processing:
* [Quasy](https://quasy-2021.webnode.cz/) : The Workshop on Quantitative Syntax
* [Depling](https://depling.org/depling2021/) : The Conference on Dependency Linguistics
* [TLT](https://tlt2021.phil.hhu.de/) : The International Workshop on Treebanks and Linguistic Theories 
* [UDW](https://universaldependencies.org/udw21/) : The Universal Dependencies Workshop

-----

<details open markdown="block">
  <summary>
    Contents on this page
  </summary>
- [Invited talks](#talks) 
- [Registration](#registration) 
- [Modality](#modality)
- [Proceedings](#proceedings)
- [Important Dates](#dates)
- [Paper submission information](#instructions)
- [Shared reviewing process](#review)
- [Chairs](#chairs)
- [Program committee](#committee)
- [Venue](#venue)
</details>
-----

### <a name="talks"> Invited talks </a>

* [Jinho Choi](http://www.mathcs.emory.edu/~choi/home.html), Emory University: Widely Interpretable Semantic Representation: Frameless Meaning Representation for Broader Applicability

> In this talk, I will present a new semantic representation, WISeR, that overcomes challenges for Abstract Meaning Representation (AMR). Despite its strengths, AMR is not easily applied to languages or domains without predefined semantic frames, and its use of numbered arguments results in semantic role labels not directly interpretable and semantically overloaded for parsers. We examine the numbered arguments of predicates in AMR and convert them into thematic roles which do not require reference to semantic frames. We create a new corpus of 1K English dialogue sentences annotated in both WISeR and AMR. WISeR shows stronger inter-annotator agreement for beginner and experienced annotators, with beginners becoming proficient in WISeR annotation more quickly. Finally, we train a state-of-the-art parser on the AMR 3.0 corpus and a WISeR corpus converted from AMR 3.0. The parser is evaluated on these corpora and our dialogue corpus. The WISeR model exhibits higher accuracy than its AMR counterpart across the board, demonstrating that WISeR is easier for parsers to learn.

* [Jennifer Foster](https://www.computing.dcu.ie/~jfoster/), Dublin City University: Treebanking and Parsing for Irish

> In this talk I will discuss recent work on treebanking and parsing for the Irish language, carried out by researchers in the Natural Language Processing group in the School of Computing in DCU. The first part of the talk will be devoted to TwittIrish, a treebank of tweets annotated according to the Universal Dependencies (UD) guidelines. I will discuss phenomena associated with this particular language/genre pair which can make the annotation process challenging, including the way in which the language found in Irish tweets differs from standard Irish, and the effect of English. I will present and analyse the results of parsing TwittIrish using state-of-the-art neural dependency parsers trained on the Irish Universal Dependencies treebank. This will lead on to the second part of the talk in which an Irish BERT language model, gaBERT, will be presented. Design decisions taken in training gaBERT will be presented, and the model will be compared to multilingual BERT on the task of UD dependency parsing and using a manual cloze-test evaluation.

* [Richard Futrell](http://socsci.uci.edu/~rfutrell/), University of California, Irvine: An Information-Theoretic Perspective on Dependency Trees

> I give an overview of some recent work taking a corpus-based, information-theoretic view on problems of dependency grammar. First, I argue for a connection between syntactic dependencies and the information-theoretic notion of mutual information, a measure of how strongly two words constrain each other, which allows us to quantify the “strength” of the link between a dependent and its head. Next, I present theoretical motivations and empirical evidence for information locality: a generalization of dependency length minimization which holds that words are under a pressure to be close to each other in word order in proportion to their mutual information. Finally I present evidence that crosslinguistic word orders reflect optimization for recoverability of dependency relations from strings of words.

* [Sylvain Kahane](https://kahane.fr/), Université Paris Nanterre: Quantitative studies on tree bank collections: Complexity, universals, and typological signature
* [Emily Pitler](http://www.emilypitler.com/), Google: Incorporating Compositionality and Morphology into End-to-End Models

> Many neural end-to-end systems today do not rely on syntactic parse trees, as much of the information that parse trees provide is encoded in the parameters of pretrained models. Lessons learned from parsing technologies and from taking a multilingual perspective, however, are still relevant even for end-to-end models. This talk will describe work that relies on compositionality in semantic parsing and in reading comprehension requiring numerical reasoning. We’ll then describe a released dataset that requires advances in multilingual modeling, and some approaches designed to better model morphology than off-the-shelf subword models that make some progress on these challenges.
 

### <a name="registration"> Registration </a>

[SyntaxFest Registration Link](https://www.softconf.com/ranlp2021/ranlp2021reg) is **OPEN**.

> For any questions, related to the payments, please write to the following email: **syntaxfest@acl-bg.org**

Please note that due to the pandemic dynamics SyntaxFest goes fully **ONLINE**. 

For this reason, **ONLY the online fee of 50 EUR** has to be paid upon registration for the whole event. 

For the cancellation policy that applies to other participants, please see the information
in the registration form.

Please also note that the payment system is external to the registration, thus you will receive the confirmation document later on, possibly in a few days.


### <a name="modality"> Modality </a>
The next and second edition will be held online. The following platforms will be used: **ZOOM** and **Gather town**.

### <a name="proceedings"> Proceedings </a>
Although SyntaxFest will be held in March 2022, the proceedings will be published well ahead of time in the ACL Anthology. Preliminary versions of all four volumes can already be downloaded here:

* [Depling 2021](proceedings/DepLing-2021.pdf)
* [Quasy 2021](proceedings/Quasy-2021.pdf)
* [TLT 2021](proceedings/TLT-2021.pdf)
* [UDW 2021](proceedings/UDW-2021.pdf)

### <a name="dates"> Important dates </a>

* **Submission deadline for long and short papers:**<br>
[_EXTENDED_] <strike>11 October 2021, AoE</strike>
* **Acceptance notification:** <strike>10 November 2021</strike>
* **Camera-ready version:** <strike>5 December 2021</strike>
* **Proceedings Publication:** <strike>December 2021</strike>
* **Conference modality:** ONLINE
* **SyntaxFest Event:** 21st–25th March 2022

_Attendants are encouraged but not obliged to participate in the whole SyntaxFest._

### <a name="instructions"> Paper submission information </a>

#### Submission page
Papers must be submitted in PDF format exclusively through the SyntaxFest 
[joint submission page](
https://easychair.org/conferences/?conf=syntaxfest2021)


#### Paper length
We invite two types of submissions: long papers and short papers.
- Long papers may consist of up to 10 pages of content (excluding references and appendices);
- Short papers may consist of up to 6 pages of content (excluding references and appendices).
- Any appendices should be included in the paper PDF.

#### Style guidelines
All submissions should follow the common SyntaxFest 2021 stylesheet (based on the one-column COLING 2020 style guidelines). Stylesheets are provided as LaTeX style file and Microsoft Word templates (templates might be subject to slight modifications for compatibility reasons). The files are downloadable from [Depling site](https://depling.org/depling2021/). See section _Style guidelines_.

#### Double-blind reviews

Reviewing of papers will be double-blind. Therefore, the paper must not include the authors' names and affiliations. Furthermore, self-references that reveal the author's identity, e.g., "We previously showed (Zeng, 2018) ...", must be avoided. Instead, use citations such as "Zeng (2018) previously showed ...". Papers that do not conform to these requirements will be rejected without review.

### <a name="review"> Shared reviewing process </a>

On the [submission site](
https://easychair.org/conferences/?conf=syntaxfest2021), authors submit their paper only once for the whole SyntaxFest, composed of 4 conferences, but they can uncheck conferences they do not wish their paper to be considered for. If the paper is deemed appropriate for more than one of the selected conferences, the SyntaxFest joint organization committee decides on the final placement of the paper, which implies the day of the presentation and the proceedings the paper will appear in.

### <a name="chairs"> Chairs </a>

The chairs for each event are:

#### Quasy

- Radek Čech (University of Ostrava)
- Xinying Chen (Xi'an Jiaotong University)

#### Depling

- Nicolas Mazziotta, Université de Liège
- Simon Mille, Universitat Pompeu Fabra

#### TLT

- Daniel Dakota, Indiana University
- Kilian Evang, Heinrich Heine University Düsseldorf
- Sandra Kübler, Indiana University

#### UDW

- Miryam de Lhoneux, Uppsala University - KU Leuven - University of Copenhagen
- Reut Tsarfaty, Bar-Ilan University - AI2

### <a name="committee"> Program committee </a>

You can look at the list of our PC members at [Depling site](https://depling.org/depling2021/). See section _SyntaxFest 2021 Program committee_.

### <a name="local"> Local organizing committee </a>

- Petya Osenova, Sofia University "St. Kl. Ohridski" and IICT-BAS
- Kiril Simov, IICT-BAS


### <a name="venue"> Venue </a>

The event will be held ONLINE but with the flavour of [Sofia University "St. Kl. Ohridski"](https://www.uni-sofia.bg/index.php/eng).
Photo by Petya Osenova.

![Sofia University. Photo by Petya Osenova](images/su-4.jpg)



