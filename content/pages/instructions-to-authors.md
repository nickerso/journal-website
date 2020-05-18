Title: Instructions to Authors
Slug: instructions-to-authors

Instructions to Authors
-----------------------

The purpose of a Physiome article is to provide an open access and citable link between a peer reviewed, published model and its reusable and reproducible implementation. All Physiome articles are open access and available on [figshare](https://physiome.figshare.com/) including the implementation as reported in the article itself. The model files submitted to Physiome must fulfil  [the demands of reusability.](about.html) All submissions to Physiome must also be associated with at least one article accepted by a peer-reviewed journal in the field of physiological modelling (referred to as a Primary Publication). Authors are encouraged to prepare their Physiome submission(s) in parallel to the Primary Publication. Submissions will be curated and evaluated, but not published until the Primary Publication is accepted. 
Please <a href = "mailto:physiome@physiomeproject.org">contact Physiome</a> if you have any queries, and if asking about a specific submission, make sure to include the submission identification number.

[Physiome Overleaf template](https://www.overleaf.com/read/kxcqgspjgtct)


<a <button href="testing.html" class="button">Physiome submission system</button> </a>


### 1. Primary Publication
Every Physiome original or retrospective article needs to be associated with one or more Primary Publications. The Primary Publication is an experimental/modelling paper describing the model(s), that has been accepted to a peer-reviewed journal in the field of physiological modelling. The Primary Publication shows that the model is validated by describing the experiments and data, and the model(s) fit to the data, as well as the biological background and why the model is important. Physiome articles focus on reproducibility and reuse, but do not deal with the validation or scientific relevance of the models, as this is already reviewed in the Primary Paper.


### 2. Types of submissions

The following types of submissions will be considered for publication in Physiome. [Here you can find templates and examples for the different types of submissions.](articles.html) 

* **2.1 Original submission**

Original submissions are author initiated submissions directly associated with a primary experimental or modelling paper that has been accepted by a journal in the field of physiological modelling. While matching authorship between the Physiome submission and the primary publication is not a requirement, it is expected that there is at least some overlap for original submissions. The purpose of a Physiome article is to provide a citable framework that ties the reproducible model implementation to its primary publication. Therefore, a Physiome original paper is structured differently than most papers published in scientific journals and some sections normally expected to be in a scientific paper are not required in a Physiome article. Below is listed the minimal information required in an original submission to Physiome. As we recognize that different models and different primary publications require different information, feel free to add any sections that are necessary to give a clear description of the model. However, keep in mind that most of the information necessary to implement the model, such as parameter values and units, are already present in the model files and do not need to be repeated in the article itself.

* **2.2 Retrospectives**

A Physiome retrospective paper is similar in most regards to an original submission, but is associated with an historical Primary Publication which has been deemed to provide substantial value to the physiological modelling community in making a reusable, reproducible, and discoverable version of the study available. Where possible, the authors of retrospective submissions should include authors from the primary publication. Retrospectives may be invited by the Physiome editors or can be author-initiated. When submitting a retrospective, it is best to first submit an expression of interest to the editors outlining why the original primary publication should be considered a suitable contribution to Physiome.

* **2.3 Reviews**

The Physiome editorial board may solicit review submissions that document a range of published models in a given area. Such reviews will make use of previously accepted Physiome submissions, often applying new data or simulation experiments to explore the capabilities of the various models. They may also point to areas of the research field lacking reproducible and reusable models. Reviews do not require a Primary Publication.

* **2.4 Letters**

A Physiome letter is an original submission that provides new insights about, or refinement of, a model that is already published in Physiome. This format allows publication of material that in itself may not justify a separate submission to a primary peer-reviewed journal, but which may still be highly instrumental for improving an existing model, expand its empirical scope or invoke experimental and theoretical research that may drive new model development. Examples of such material include, but are not restricted to, experimental measurements of important parameter values that have been only indirectly estimated in the original paper, empirically or theoretically justified questioning or refutation of critical model premises, experimental data confirming or refuting model predictions, and theoretical analyses of the model that provide novel insights that may spur further model development or experimental work.


### 3. Preparing your submission

What to include in your Original or Retrospective submission:
The Physiome submission must include all the resources required to evaluate the reproducibility, reusability, and discoverability of the model. 

Every Original or Retrospective submission in Physiome must be associated with at least one Primary Publication. It is encouraged that the authors of the Primary Publication are included as authors in the Physiome paper. The Physiome team can help with reaching out to them if needed.

A Physiome article consists of a description and the code of a reproducible implementation of the model. Such resources can be directly included in the zip archive submitted to Physiome, or linked to via appropriate online repositories or databases. A list of the databases used by Physiome can be found under "Submission". While there are many different types of models, file types and structures used by modelers, there are some items which are common to all Physiome submissions. These are:

A manuscript, which should be prepared using the [Physiome Overleaf template](https://www.overleaf.com/read/kxcqgspjgtct) and submitted as the downloaded source. The manuscript must include i) a summary of the background, purpose and modifications of the model, ii) all instructions needed to run the implemented files, and, iii) clearly stated reproducibility goals that overlap with the results shown in the Primary Publication.

Source codes for the model implementation, either as procedural languages (e.g., Matlab, C, Python) or declarative languages (e.g., CellML, SBML, SED-ML). Instructions on how to run them in order to reproduce the results must be presented in the manuscript. If possible, show that the model obeys physical laws such as conservation of energy and conservation of mass or charge. This could be done for example by implementing it in bond graph form or formulate it as a port-Hamiltonian system and implement it numerically in a mass and energy conserving form. 

The following sections should be included in the manuscript:

**Introduction:** 
A brief explanation of the biological system modelled. Make sure to define the biological entities present, as well as referencing the data and species used in the primary papers. Clearly reference previously published iterations of the model (to establish provenance), and any data that has been used for validation.

**Model Description:**
An overview of the type of model and its structure. As the model code submitted should be complete, all parameter values, units, etc will be included in the files and are not required to be printed in the article. 

**Model Modifications:**
Any modifications made to the model, including motivations and origin. This could be corrections, missing parameter values taken from other sources, reformulation of equations for implementation (e.g analytical to numerical), etc. References to the origins of the parameter values, if not defined in the primary publication.

**Computational Simulation:**
All relevant information on how to run the model, such as definitions of libraries, versions of simulation packages, computational solvers and time steps used, which type of machine the code was originally run on, if the code was parallelised, on how many cores, runtime, etc. 

**Reproducibility goals:**
Figures showing that the code simulates the same graphs as shown in the primary paper. Which results from the Primary Paper were reproducible? If some were not, what were the differences? Which model modifications yielded which results? 

**Discussion:**
Discuss the results, strengths and limitations of the model, and point to future developments and uses. 
 
 **Acknowledgements and/or Notes:**
These sections are not required, but may be added before the list of references. Here you may for example acknowledge funders and contributors not listed as authors, or list additional repositories for the model or the data. 

The code of a full model submission should include:

<ul>
<li>Units</li>
<li>All parameter values and initial values</li>
<li>All equations</li>
<li>Annotation (if possible)</li>
</ul>



### 4. Submission
Submissions to Physiome can be made through our submission system:

<a <button href="testing.html" class="button">Physiome submission system</button> </a>

An [ORCiD](https://orcid.org/) is required to log in. If the submitter and the corresponding author are different individuals, please make sure that the verified email is tied to the submitter.  

All accepted submissions will be published open access on [figshare.](https://physiome.figshare.com/) 

Submissions can be made by linking to an open access, permanent, and version control repository, or by sending the files directly through the submission system. If you use a repository, make sure that our curators have access to the version of the workspace that was current at the time of your submission to Physiome. The Physiome Project has an associated repository for this purpose, the [Physiome Model Repository (PMR)](https://models.physiomeproject.org), which we encourage authors to use. Upon receipt of a submission which is not already linked to the PMR, curators will create a private PMR workspace for the submission – a version controlled repository within PMR. When a Physiome submission consists of models or data already in PMR, then that will be linked to this submission workspace internally to PMR. 

This list details the curators' presence in various popular repositories. If you submit from any of these, make sure to give our curator access to your workspace in the repository.

<ul>
<li><a href="https://models.physiomeproject.org">Physiome Model Repository (PMR)</a> Username: PhysiomeCurators</li>
<li><a href="https://github.com/">GitHub</a> Username: PhysiomeCurators</li>
<li><a href="https://bitbucket.org/">Bitbucket</a> Username: PhysiomeCurators</li>
<li>Figshare
<li>Biomodels
<li>Google Drive
</ul>



#### Before submitting your model to Physiome for curation, please check the following:

<ul>
<li>Are the reproducibility goals clearly stated in your manuscript, and do they overlap with results from the primary paper?</li>
<li>Does the implemented model in your submission produce the results presented in the manuscript, both reproduced results and additional predictions?</li>
<li>Are all instructions needed to run the model files outlined in your manuscript (such as algorithms, versions, packages, etc)?</li>
<li>Are all files needed to run the implemented model included?</li>
<li>Do you have a SedML file or general plot script included in your files?</li>
<li>Is your model presented in a standardised format (if possible)? </li>
<li>Have you specified the provenance of your model and parameter values?</li>
<li>Does the model have appropriate modularity and annotation (if possible)?</li>
<li>Is your manuscript written in the [Physiome Overleaf template](https://www.overleaf.com/read/kxcqgspjgtct)?</li>
<li>Are all graphs and axes labeled in your figures, and is the text in your figures in a large enough font size to be easily read?</li>
<li>Have you shown that the model obeys physical laws such as conservation of energy and conservation of mass or charge?</li>
</ul>


### 5. Curation
The Physiome curators will check the reproducibility of your model by running the model implementation provided in the submission and compare the results to the primary paper as stated through the reproducibility goals specified in the Physiome manuscript. If the model can not reproduce the results, or if there are any other problems with running the files, the curator will contact the submitting author with their concerns. In cases where the model or simulation implementation could be encoded in one of the Physiome standards, the curators will help provide the author with information about how this could be done (including direct assistance if resource permits).

### 6. Cost
Physiome articles are curated and published as open access with a DOI citable as a journal article, with an author processing charge of US$300. The fee is to be paid after acceptance of the submission, but before publication.


### 7. Copyright of submission
Physiome supports open science and the idea that authors should retain the rights to their own works. Therefore, our copyright policy is the following:

(a) The authors grant to the Physiome the right to publish and communicate Works to the public in electronic form under one of the following [Creative Commons licenses.](https://creativecommons.org/licenses/by/4.0/legalcode)

(b) The authors retain copyright in the Works and the right to re-use the Works after publication.

(c) The authors must ensure that they have permission from any rights owner to include any third party content. 

For additional questions about Physiome’s copyright and licensing policies, please contact our editors at physiome@physiomeproject.org. Please remember to state the submission identification number if applicable.


