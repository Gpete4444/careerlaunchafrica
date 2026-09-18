export const LANGS = [
  { id: "en", label: "English" },
  { id: "fr", label: "Français" },
  { id: "pt", label: "Português" },
  { id: "sw", label: "Kiswahili" },
  { id: "mg", label: "Malagasy" },
];

/** Product names stay in English in every locale. Surrounding sentences are translated. */

export const strings = {
  en: {
    brand: "Career Launch Africa",
    tagline: "Build a CV. Practice interviews. Plan a career.",
    weNeverStore: "We never store your answers on our servers.",
    privacyPhone:
      "This file is built on your phone or personal computer. We never see it. Nothing is uploaded. Close this page and the text is gone.",
    privacyChat:
      "The chat you use (Gemini or Claude) is separate. We do not store names, numbers, or your CV. If you might stop and continue later, use a normal chat you can open again — not a temporary chat.",
    tileCv: "CV Launch",
    tileCvHint: "Create a CV, or get suggestions to improve or tailor one.",
    tileInterview: "Interview Launch",
    tileRoadmap: "Career Roadmap Launch",
    comingSoon: "Coming soon",
    open: "Open",
    openAgent: "Open {agent}",
    backHub: "Back to Career Launch Africa",
    backCv: "Back to CV Launch",
    next: "Next",
    backStep: "Back",
    stepOf: "Step {current} of {total}",
    learnWhy: "Learn why",
    hideLearn: "Hide",
    finishQ: "Do you need to finish today?",
    finishYes: "Yes — I need to finish in this sitting",
    finishNo: "No — I can continue later",
    finishYesHint: "A temporary chat is OK if you will finish now.",
    finishNoHint: "Use a normal chat you can open again. Do not use a temporary chat.",
    pathQ: "What do you want to do?",
    pathCreate: "Start a new CV",
    pathCreateHint: "We will write a CV you can download as Word or PDF.",
    pathImprove: "Improve a CV I already have",
    pathImproveHint:
      "Suggestions only. You will need to paste your current CV text into the chat. You change your own file. We will not rebuild or download a new CV.",
    pathTailor: "Tailor my CV to a job",
    pathTailorHint:
      "Suggestions to match a job. You will need to paste your current CV and the job text into the chat. You change your own file. We will not rebuild or download a new CV.",
    pathContinue: "Continue creating",
    pathContinueHint: "You will enter your progress file from a previous session.",
    atsTitle: "ATS score — goal: above 80",
    atsBlurb:
      "On this path the chat will estimate how ready your CV is for employer software (ATS). The goal is above 80. This is an estimate, not an official score.",
    atsLearnBody:
      "An ATS (Applicant Tracking System) is software many employers use before a person reads a CV. It prefers a simple one-column Word file, standard headings, clear dates, city plus phone or WhatsApp, and words that match the job — only if those facts are true. Photos, tables, columns, and graphics often fail. Different chats will give different numbers. That is normal. Aim above 80 before you apply.",
    keepTab:
      "Leave this Career Launch Africa tab open. You will come back here. Do not close it.",
    loginFirst:
      "If the chat asks you to log in, log in first, then come back to this tab. Login can wipe what you copied. Copy again here if paste is empty.",
    copyWizard: "Copy the wizard",
    copyTitle: "Copy the wizard",
    tipsTitle: "Read this first",
    copiedGoNext: "I copied it — next",
    showWizard: "Show the wizard text",
    progressAria: "Progress",
    copied: "Copied. Tap Next, then open the chat and paste.",
    copyFail: "Could not copy. Open Show the wizard text and copy it yourself.",
    recopyHint: "If paste is empty, copy again here. You do not need to read the long text.",
    openFirst: "Then open this chat and paste",
    ifBusy: "If that chat is busy or out of free messages",
    deepSeekOnly: "DeepSeek — only if you are already logged in",
    readyCreateTitle: "Copy, then open the chat",
    readyImproveTitle: "Copy, then open the chat for suggestions",
    readyTailorTitle: "Copy, then open the chat to match a job",
    readyContinueTitle: "Continue creating — copy, then open the chat",
    readyContinueHelp:
      "In the chat, paste the wizard, then a blank line, then the text from your progress file, then send.",
    readyReturnCreate:
      "When the chat prints === CV START ===, come back to this tab and open Make Word file.",
    readyReturnSuggest:
      "When the chat finishes, apply the numbered suggestions in your own CV file. There is no new file to download.",
    readySaveHelp: "Need to stop? In the chat, type Save. Then come here and open Save progress.",
    makeWord: "Make Word file",
    makeWordLater: "After the chat: Make Word file",
    saveProgressLink: "Save progress",
    secondOpinionTitle: "Want another ATS estimate?",
    secondOpinionHelp:
      "Copy this short prompt into a different chat (for example Claude if you used Gemini). Then paste your CV text. Do not upload a file.",
    copySecondOpinion: "Copy the second-opinion prompt",
    copiedSecond: "Copied — paste it into another chat, then paste your CV text.",
    pasteOnly:
      "Paste only. Do not attach a Word file, PDF, or photo. Uploading often fails on free accounts or asks you to pay.",
    makeWordTitle: "Make a Word or PDF file",
    pasteLabel: "Paste the box from the wizard (from === CV START === to === CV END ===)",
    pastePlaceholder: "=== CV START ===\n...\n=== CV END ===",
    downloadWord: "Download Word file",
    downloadPdf: "Download PDF",
    parseError:
      "Paste the box from the wizard. We need the lines === CV START === and === CV END ===.",
    pdfFail: "Could not build the PDF. Try Word, or reload the page.",
    pasteProgressLabel:
      "Paste the progress box (from === PROGRESS START === to === PROGRESS END ===)",
    builtLocal: "The file is built on this phone or personal computer. We never see it.",
    wizardV: "CV wizard v1.1 — Sep 2026",
    agentGemini: "Gemini",
    agentClaude: "Claude",
    agentDeepSeek: "DeepSeek",
    claudeWait:
      "If Claude says you must wait: do not pay. Do not start a new chat. Come back to this same chat later, or open Gemini, come back here, copy the wizard again, and paste.",
    langAria: "Site language",
    saveProgressTitle: "Save your progress",
    saveProgressHelp:
      "Paste the box from the chat (from === PROGRESS START === to === PROGRESS END ===). Download it onto this phone or personal computer. Later choose Continue creating and paste this file into the chat.",
    downloadProgress: "Download progress file",
    progressError:
      "Paste the progress box. We need the lines === PROGRESS START === and === PROGRESS END ===.",
    progressPlaceholder: "=== PROGRESS START ===\n...\n=== PROGRESS END ===",
  },
  fr: {
    brand: "Career Launch Africa",
    tagline: "Créez un CV. Entraînez-vous aux entretiens. Planifiez votre parcours.",
    weNeverStore: "Nous ne stockons jamais vos réponses sur nos serveurs.",
    privacyPhone:
      "Ce fichier est créé sur votre téléphone ou votre ordinateur personnel. Nous ne le voyons jamais. Rien n’est envoyé. Fermez cette page et le texte disparaît.",
    privacyChat:
      "Le chat que vous utilisez (Gemini ou Claude) est séparé. Nous ne stockons ni noms, ni numéros, ni votre CV. Si vous pouvez vous arrêter et continuer plus tard, utilisez un chat normal que vous pourrez rouvrir — pas un chat temporaire.",
    tileCv: "CV Launch",
    tileCvHint: "Créer un CV, ou obtenir des suggestions pour l’améliorer ou l’adapter.",
    tileInterview: "Interview Launch",
    tileRoadmap: "Career Roadmap Launch",
    comingSoon: "Bientôt",
    open: "Ouvrir",
    openAgent: "Ouvrir {agent}",
    backHub: "Retour à Career Launch Africa",
    backCv: "Retour à CV Launch",
    next: "Suivant",
    backStep: "Retour",
    stepOf: "Étape {current} sur {total}",
    learnWhy: "Pourquoi",
    hideLearn: "Masquer",
    finishQ: "Devez-vous terminer aujourd’hui ?",
    finishYes: "Oui — je dois terminer maintenant",
    finishNo: "Non — je peux continuer plus tard",
    finishYesHint: "Un chat temporaire convient si vous terminez maintenant.",
    finishNoHint: "Utilisez un chat normal que vous pourrez rouvrir. Pas un chat temporaire.",
    pathQ: "Que voulez-vous faire ?",
    pathCreate: "Commencer un nouveau CV",
    pathCreateHint: "Nous rédigeons un CV que vous pourrez télécharger en Word ou PDF.",
    pathImprove: "Améliorer un CV que j’ai déjà",
    pathImproveHint:
      "Suggestions seulement. Vous devrez coller le texte de votre CV actuel dans le chat. Vous modifiez votre fichier. Nous ne recréons pas et ne téléchargeons pas un nouveau CV.",
    pathTailor: "Adapter mon CV à une offre",
    pathTailorHint:
      "Suggestions pour une offre. Vous devrez coller votre CV actuel et le texte de l’offre dans le chat. Vous modifiez votre fichier. Nous ne recréons pas et ne téléchargeons pas un nouveau CV.",
    pathContinue: "Continuer la création",
    pathContinueHint: "Vous allez saisir votre fichier de progression d’une session précédente.",
    atsTitle: "Score ATS — objectif : plus de 80",
    atsBlurb:
      "Sur ce parcours, le chat estimera si votre CV passe le logiciel des employeurs (ATS). L’objectif est plus de 80. C’est une estimation, pas un score officiel.",
    atsLearnBody:
      "Un ATS (Applicant Tracking System) est un logiciel que beaucoup d’employeurs utilisent avant qu’une personne lise le CV. Il préfère un fichier Word simple en une colonne, des titres habituels, des dates claires, la ville plus le téléphone ou WhatsApp, et des mots de l’offre seulement s’ils sont vrais. Photos, tableaux, colonnes et graphismes échouent souvent. Deux chats peuvent donner deux chiffres. C’est normal. Visez plus de 80 avant de postuler.",
    keepTab:
      "Laissez cet onglet Career Launch Africa ouvert. Vous reviendrez ici. Ne le fermez pas.",
    loginFirst:
      "Si le chat demande une connexion, connectez-vous d’abord, puis revenez ici. La connexion peut vider le presse-papiers. Recopiez ici si le collage est vide.",
    copyWizard: "Copier l’assistant",
    copyTitle: "Copier l’assistant",
    tipsTitle: "Lisez ceci d’abord",
    copiedGoNext: "J’ai copié — suivant",
    showWizard: "Afficher le texte de l’assistant",
    progressAria: "Progression",
    copied: "Copié. Appuyez sur Suivant, puis ouvrez le chat et collez.",
    copyFail: "Copie impossible. Ouvrez Afficher le texte de l’assistant et copiez-le.",
    recopyHint: "Si le collage est vide, recopiez ici. Vous n’avez pas besoin de lire le long texte.",
    openFirst: "Puis ouvrez ce chat et collez",
    ifBusy: "Si ce chat est occupé ou sans messages gratuits",
    deepSeekOnly: "DeepSeek — seulement si vous êtes déjà connecté",
    readyCreateTitle: "Copiez, puis ouvrez le chat",
    readyImproveTitle: "Copiez, puis ouvrez le chat pour des suggestions",
    readyTailorTitle: "Copiez, puis ouvrez le chat pour une offre",
    readyContinueTitle: "Continuer la création — copiez, puis ouvrez le chat",
    readyContinueHelp:
      "Dans le chat, collez l’assistant, une ligne vide, puis le texte de votre fichier de progression, puis envoyez.",
    readyReturnCreate:
      "Quand le chat affiche === CV START ===, revenez à cet onglet et ouvrez Créer le fichier Word.",
    readyReturnSuggest:
      "Quand le chat a fini, appliquez les suggestions numérotées dans votre propre fichier. Il n’y a pas de nouveau fichier à télécharger.",
    readySaveHelp: "Besoin de pause ? Dans le chat, tapez Save. Puis revenez ici et ouvrez Enregistrer la progression.",
    makeWord: "Créer le fichier Word",
    makeWordLater: "Après le chat : Créer le fichier Word",
    saveProgressLink: "Enregistrer la progression",
    secondOpinionTitle: "Un autre avis ATS ?",
    secondOpinionHelp:
      "Collez cette courte consigne dans un autre chat (par exemple Claude si vous avez utilisé Gemini). Puis collez le texte de votre CV. N’envoyez pas de fichier.",
    copySecondOpinion: "Copier la consigne de second avis",
    copiedSecond: "Copié — collez-la dans un autre chat, puis collez le texte de votre CV.",
    pasteOnly:
      "Collez seulement le texte. N’ajoutez pas de fichier Word, PDF ou photo. L’envoi d’un fichier échoue souvent sur un compte gratuit ou demande un paiement.",
    makeWordTitle: "Créer un fichier Word ou PDF",
    pasteLabel: "Collez le bloc de l’assistant (de === CV START === à === CV END ===)",
    pastePlaceholder: "=== CV START ===\n...\n=== CV END ===",
    downloadWord: "Télécharger le fichier Word",
    downloadPdf: "Télécharger le PDF",
    parseError:
      "Collez le bloc de l’assistant. Il faut les lignes === CV START === et === CV END ===.",
    pdfFail: "Impossible de créer le PDF. Essayez Word, ou rechargez la page.",
    pasteProgressLabel:
      "Collez le bloc de progression (de === PROGRESS START === à === PROGRESS END ===)",
    builtLocal: "Le fichier est créé sur ce téléphone ou cet ordinateur personnel. Nous ne le voyons jamais.",
    wizardV: "Assistant CV v1.1 — sept. 2026",
    agentGemini: "Gemini",
    agentClaude: "Claude",
    agentDeepSeek: "DeepSeek",
    claudeWait:
      "Si Claude dit d’attendre : ne payez pas. N’ouvrez pas un nouveau chat. Revenez à ce même chat plus tard, ou ouvrez Gemini, revenez ici, recopiez l’assistant et collez.",
    langAria: "Langue du site",
    saveProgressTitle: "Enregistrer la progression",
    saveProgressHelp:
      "Collez le bloc du chat (de === PROGRESS START === à === PROGRESS END ===). Téléchargez-le sur ce téléphone ou cet ordinateur personnel. Plus tard, choisissez Continuer la création et collez ce fichier dans le chat.",
    downloadProgress: "Télécharger le fichier de progression",
    progressError:
      "Collez le bloc de progression. Il faut les lignes === PROGRESS START === et === PROGRESS END ===.",
    progressPlaceholder: "=== PROGRESS START ===\n...\n=== PROGRESS END ===",
  },
  pt: {
    brand: "Career Launch Africa",
    tagline: "Crie um CV. Pratique entrevistas. Planeie a sua carreira.",
    weNeverStore: "Nunca guardamos as suas respostas nos nossos servidores.",
    privacyPhone:
      "Este ficheiro é criado no seu telemóvel ou computador pessoal. Nunca o vemos. Nada é enviado. Feche esta página e o texto desaparece.",
    privacyChat:
      "O chat que usa (Gemini ou Claude) é separado. Não guardamos nomes, números nem o seu CV. Se puder parar e continuar mais tarde, use um chat normal que possa abrir outra vez — não um chat temporário.",
    tileCv: "CV Launch",
    tileCvHint: "Criar um CV, ou obter sugestões para melhorar ou adaptar um.",
    tileInterview: "Interview Launch",
    tileRoadmap: "Career Roadmap Launch",
    comingSoon: "Em breve",
    open: "Abrir",
    openAgent: "Abrir {agent}",
    backHub: "Voltar a Career Launch Africa",
    backCv: "Voltar ao CV Launch",
    next: "Seguinte",
    backStep: "Voltar",
    stepOf: "Passo {current} de {total}",
    learnWhy: "Saber porquê",
    hideLearn: "Esconder",
    finishQ: "Precisa terminar hoje?",
    finishYes: "Sim — preciso terminar agora",
    finishNo: "Não — posso continuar mais tarde",
    finishYesHint: "Um chat temporário serve se for terminar agora.",
    finishNoHint: "Use um chat normal que possa abrir outra vez. Não use um chat temporário.",
    pathQ: "O que quer fazer?",
    pathCreate: "Começar um CV novo",
    pathCreateHint: "Vamos escrever um CV que pode descarregar em Word ou PDF.",
    pathImprove: "Melhorar um CV que já tenho",
    pathImproveHint:
      "Só sugestões. Vai colar o texto do seu CV atual no chat. Altera o seu próprio ficheiro. Não recriamos nem descarregamos um CV novo.",
    pathTailor: "Adaptar o meu CV a uma vaga",
    pathTailorHint:
      "Sugestões para uma vaga. Vai colar o seu CV atual e o texto da vaga no chat. Altera o seu próprio ficheiro. Não recriamos nem descarregamos um CV novo.",
    pathContinue: "Continuar a criar",
    pathContinueHint: "Vai introduzir o ficheiro de progresso de uma sessão anterior.",
    atsTitle: "Pontuação ATS — objetivo: acima de 80",
    atsBlurb:
      "Neste percurso o chat estima se o seu CV passa o software dos empregadores (ATS). O objetivo é acima de 80. É uma estimativa, não uma pontuação oficial.",
    atsLearnBody:
      "Um ATS (Applicant Tracking System) é software que muitos empregadores usam antes de uma pessoa ler o CV. Prefere um Word simples numa coluna, títulos habituais, datas claras, cidade mais telefone ou WhatsApp, e palavras da vaga só se forem verdade. Fotos, tabelas, colunas e gráficos falham muitas vezes. Dois chats dão números diferentes. É normal. Mire acima de 80 antes de se candidatar.",
    keepTab:
      "Deixe este separador Career Launch Africa aberto. Vai voltar aqui. Não o feche.",
    loginFirst:
      "Se o chat pedir início de sessão, entre primeiro e volte a este separador. O início de sessão pode apagar o que copiou. Copie outra vez aqui se colar vazio.",
    copyWizard: "Copiar o assistente",
    copyTitle: "Copiar o assistente",
    tipsTitle: "Leia isto primeiro",
    copiedGoNext: "Já copiei — seguinte",
    showWizard: "Mostrar o texto do assistente",
    progressAria: "Progresso",
    copied: "Copiado. Toque em Seguinte, depois abra o chat e cole.",
    copyFail: "Não foi possível copiar. Abra Mostrar o texto do assistente e copie-o.",
    recopyHint: "Se colar vazio, copie outra vez aqui. Não precisa de ler o texto longo.",
    openFirst: "Depois abra este chat e cole",
    ifBusy: "Se esse chat estiver ocupado ou sem mensagens grátis",
    deepSeekOnly: "DeepSeek — só se já tiver sessão iniciada",
    readyCreateTitle: "Copie, depois abra o chat",
    readyImproveTitle: "Copie, depois abra o chat para sugestões",
    readyTailorTitle: "Copie, depois abra o chat para uma vaga",
    readyContinueTitle: "Continuar a criar — copie, depois abra o chat",
    readyContinueHelp:
      "No chat, cole o assistente, uma linha vazia, depois o texto do ficheiro de progresso, e envie.",
    readyReturnCreate:
      "Quando o chat mostrar === CV START ===, volte a este separador e abra Criar ficheiro Word.",
    readyReturnSuggest:
      "Quando o chat terminar, aplique as sugestões numeradas no seu próprio ficheiro. Não há ficheiro novo para descarregar.",
    readySaveHelp: "Precisa parar? No chat, escreva Save. Depois volte aqui e abra Guardar progresso.",
    makeWord: "Criar ficheiro Word",
    makeWordLater: "Depois do chat: Criar ficheiro Word",
    saveProgressLink: "Guardar progresso",
    secondOpinionTitle: "Outra estimativa ATS?",
    secondOpinionHelp:
      "Cole este texto curto noutro chat (por exemplo Claude se usou Gemini). Depois cole o texto do CV. Não envie um ficheiro.",
    copySecondOpinion: "Copiar o texto de segunda opinião",
    copiedSecond: "Copiado — cole noutro chat e depois cole o texto do CV.",
    pasteOnly:
      "Cole só o texto. Não anexe Word, PDF ou foto. Enviar um ficheiro muitas vezes falha na conta grátis ou pede pagamento.",
    makeWordTitle: "Criar um ficheiro Word ou PDF",
    pasteLabel: "Cole a caixa do assistente (de === CV START === até === CV END ===)",
    pastePlaceholder: "=== CV START ===\n...\n=== CV END ===",
    downloadWord: "Descarregar o ficheiro Word",
    downloadPdf: "Descarregar o PDF",
    parseError:
      "Cole a caixa do assistente. Precisamos das linhas === CV START === e === CV END ===.",
    pdfFail: "Não foi possível criar o PDF. Tente Word, ou recarregue a página.",
    pasteProgressLabel:
      "Cole a caixa de progresso (de === PROGRESS START === até === PROGRESS END ===)",
    builtLocal: "O ficheiro é criado neste telemóvel ou computador pessoal. Nunca o vemos.",
    wizardV: "Assistente de CV v1.1 — set. 2026",
    agentGemini: "Gemini",
    agentClaude: "Claude",
    agentDeepSeek: "DeepSeek",
    claudeWait:
      "Se o Claude disser para esperar: não pague. Não comece um chat novo. Volte a este mesmo chat mais tarde, ou abra o Gemini, volte aqui, copie o assistente outra vez e cole.",
    langAria: "Idioma do site",
    saveProgressTitle: "Guardar o progresso",
    saveProgressHelp:
      "Cole a caixa do chat (de === PROGRESS START === até === PROGRESS END ===). Descarregue para este telemóvel ou computador pessoal. Mais tarde escolha Continuar a criar e cole este ficheiro no chat.",
    downloadProgress: "Descarregar o ficheiro de progresso",
    progressError:
      "Cole a caixa de progresso. Precisamos das linhas === PROGRESS START === e === PROGRESS END ===.",
    progressPlaceholder: "=== PROGRESS START ===\n...\n=== PROGRESS END ===",
  },
  sw: {
    brand: "Career Launch Africa",
    tagline: "Tengeneza CV. Fanya mazoezi ya mahojiano. Panga kazi.",
    weNeverStore: "Hatuwezi kuhifadhi majibu yako kwenye seva zetu.",
    privacyPhone:
      "Faili hili linatengenezwa kwenye simu yako au kompyuta yako. Hatulioni. Hakuna kinachotumwa. Funga ukurasa huu na maandishi yatatoweka.",
    privacyChat:
      "Gumzo unalotumia (Gemini au Claude) ni tofauti. Hatuwezi kuhifadhi majina, namba, wala CV yako. Ukitaka kusimama na kuendelea baadaye, tumia gumzo la kawaida unaloweza kufungua tena — si gumzo la muda.",
    tileCv: "CV Launch",
    tileCvHint: "Tengeneza CV, au pata mapendekezo ya kuboresha au kulinganisha na kazi.",
    tileInterview: "Interview Launch",
    tileRoadmap: "Career Roadmap Launch",
    comingSoon: "Inakuja hivi karibuni",
    open: "Fungua",
    openAgent: "Fungua {agent}",
    backHub: "Rudi Career Launch Africa",
    backCv: "Rudi CV Launch",
    next: "Endelea",
    backStep: "Rudi",
    stepOf: "Hatua {current} kati ya {total}",
    learnWhy: "Kwa nini",
    hideLearn: "Ficha",
    finishQ: "Je, unahitaji kumaliza leo?",
    finishYes: "Ndiyo — lazima nimalize sasa",
    finishNo: "Hapana — naweza kuendelea baadaye",
    finishYesHint: "Gumzo la muda linatosha ukimaliza sasa.",
    finishNoHint: "Tumia gumzo la kawaida unaloweza kufungua tena. Usitumie gumzo la muda.",
    pathQ: "Unataka kufanya nini?",
    pathCreate: "Anza CV mpya",
    pathCreateHint: "Tutaandika CV utakayoweza kupakua kama Word au PDF.",
    pathImprove: "Boresha CV niliyo nayo",
    pathImproveHint:
      "Mapendekezo tu. Utahitaji kubandika maandishi ya CV yako ya sasa kwenye gumzo. Unabadilisha faili lako. Hatutengenezi wala kupakua CV mpya.",
    pathTailor: "Linganisha CV yangu na kazi",
    pathTailorHint:
      "Mapendekezo ya kazi. Utahitaji kubandika CV yako ya sasa na maandishi ya kazi kwenye gumzo. Unabadilisha faili lako. Hatutengenezi wala kupakua CV mpya.",
    pathContinue: "Endelea kutengeneza",
    pathContinueHint: "Utaingiza faili lako la maendeleo kutoka kipindi kilichopita.",
    atsTitle: "Alama ya ATS — lengo: zaidi ya 80",
    atsBlurb:
      "Katika njia hii gumzo litakadiria kama CV yako iko tayari kwa programu ya waajiri (ATS). Lengo ni zaidi ya 80. Hii ni makadirio, si alama rasmi.",
    atsLearnBody:
      "ATS (Applicant Tracking System) ni programu waajiri wengi hutumia kabla mtu kusoma CV. Inapendelea faili la Word lenye safu moja, vichwa vya kawaida, tarehe wazi, mji pamoja na simu au WhatsApp, na maneno ya kazi ikiwa ni kweli. Picha, jedwali, safu mbili na michoro mara nyingi vinashindwa. Gumzo mbili zinaweza kutoa namba tofauti. Ni kawaida. Lenga zaidi ya 80 kabla ya kuomba kazi.",
    keepTab:
      "Acha kichupo hiki cha Career Launch Africa wazi. Utarudi hapa. Usifunge.",
    loginFirst:
      "Ikiwa gumzo linaomba kuingia, ingia kwanza, kisha rudi kwenye kichupo hiki. Kuingia kunaweza kufuta ulichokopa. Nakili tena hapa ikiwa kubandika ni tupu.",
    copyWizard: "Nakili mwongozo",
    copyTitle: "Nakili mwongozo",
    tipsTitle: "Soma hii kwanza",
    copiedGoNext: "Nimenakili — endelea",
    showWizard: "Onyesha maandishi ya mwongozo",
    progressAria: "Maendeleo",
    copied: "Imenakiliwa. Gusa Endelea, kisha fungua gumzo na ubandike.",
    copyFail: "Imeshindwa kunakili. Fungua Onyesha maandishi ya mwongozo ukinakili mwenyewe.",
    recopyHint: "Ikiwa kubandika ni tupu, nakili tena hapa. Huhitaji kusoma maandishi marefu.",
    openFirst: "Kisha fungua gumzo hili na ubandike",
    ifBusy: "Ikiwa gumzo hilo limejaa au hamna ujumbe wa bure",
    deepSeekOnly: "DeepSeek — tu kama tayari umeingia",
    readyCreateTitle: "Nakili, kisha fungua gumzo",
    readyImproveTitle: "Nakili, kisha fungua gumzo la mapendekezo",
    readyTailorTitle: "Nakili, kisha fungua gumzo la kulinganisha kazi",
    readyContinueTitle: "Endelea kutengeneza — nakili, kisha fungua gumzo",
    readyContinueHelp:
      "Kwenye gumzo, bandika mwongozo, mstari tupu, kisha maandishi ya faili lako la maendeleo, kisha tuma.",
    readyReturnCreate:
      "Gumzo linapoonyesha === CV START ===, rudi kwenye kichupo hiki ufungue Tengeneza faili la Word.",
    readyReturnSuggest:
      "Gumzo likimaliza, tumia mapendekezo yenye namba kwenye faili lako la CV. Hakuna faili jipya la kupakua.",
    readySaveHelp: "Unahitaji kusimama? Kwenye gumzo, andika Save. Kisha rudi hapa ufungue Hifadhi maendeleo.",
    makeWord: "Tengeneza faili la Word",
    makeWordLater: "Baada ya gumzo: Tengeneza faili la Word",
    saveProgressLink: "Hifadhi maendeleo",
    secondOpinionTitle: "Unataka makadirio mengine ya ATS?",
    secondOpinionHelp:
      "Nakili mwongozo huu mfupi kwenye gumzo lingine (kwa mfano Claude ikiwa ulitumia Gemini). Kisha bandika maandishi ya CV. Usipakie faili.",
    copySecondOpinion: "Nakili mwongozo wa maoni ya pili",
    copiedSecond: "Imenakiliwa — bandika kwenye gumzo lingine, kisha bandika maandishi ya CV.",
    pasteOnly:
      "Bandika maandishi tu. Usipakie faili la Word, PDF, wala picha. Kupakia mara nyingi kunashindwa kwenye akaunti ya bure au kunaomba malipo.",
    makeWordTitle: "Tengeneza faili la Word au PDF",
    pasteLabel: "Bandika kisanduku kutoka mwongozo (kutoka === CV START === hadi === CV END ===)",
    pastePlaceholder: "=== CV START ===\n...\n=== CV END ===",
    downloadWord: "Pakua faili la Word",
    downloadPdf: "Pakua PDF",
    parseError:
      "Bandika kisanduku kutoka mwongozo. Tunahitaji mistari === CV START === na === CV END ===.",
    pdfFail: "Imeshindwa kutengeneza PDF. Jaribu Word, au pakia ukurasa tena.",
    pasteProgressLabel:
      "Bandika kisanduku cha maendeleo (kutoka === PROGRESS START === hadi === PROGRESS END ===)",
    builtLocal: "Faili linatengenezwa kwenye simu hii au kompyuta yako. Hatulioni.",
    wizardV: "Mwongozo wa CV v1.1 — Septemba 2026",
    agentGemini: "Gemini",
    agentClaude: "Claude",
    agentDeepSeek: "DeepSeek",
    claudeWait:
      "Ikiwa Claude anasema usubiri: usilipe. Usianzishe gumzo jipya. Rudi kwenye gumzo hilo hilo baadaye, au fungua Gemini, rudi hapa, nakili mwongozo tena, kisha bandika.",
    langAria: "Lugha ya tovuti",
    saveProgressTitle: "Hifadhi maendeleo yako",
    saveProgressHelp:
      "Bandika kisanduku kutoka gumzo (kutoka === PROGRESS START === hadi === PROGRESS END ===). Lipakue kwenye simu hii au kompyuta yako. Baadaye chagua Endelea kutengeneza na ubandike faili hili kwenye gumzo.",
    downloadProgress: "Pakua faili la maendeleo",
    progressError:
      "Bandika kisanduku cha maendeleo. Tunahitaji mistari === PROGRESS START === na === PROGRESS END ===.",
    progressPlaceholder: "=== PROGRESS START ===\n...\n=== PROGRESS END ===",
  },
  mg: {
    brand: "Career Launch Africa",
    tagline: "Mamorona CV. Mianatra dinidinika. Manomana ny asanao.",
    weNeverStore: "Tsy tehirizinay amin’ny serveur-nay ny valinteninao.",
    privacyPhone:
      "Amin’ny findrinao na ny solosainao no amboarina io rakitra io. Tsy hitanay izany. Tsy misy alefa. Raha hidiana ity pejy ity dia lasa ny lahatsoratra.",
    privacyChat:
      "Ny chat ampiasainao (Gemini na Claude) dia hafa. Tsy tehirizinay ny anarana, ny laharana, na ny CV-nao. Raha hijanona ianao dia tohizo any aoriana, mampiasà chat tsotra azonao sokafana indray — tsy chat vonjimaika.",
    tileCv: "CV Launch",
    tileCvHint: "Mamorona CV, na mahazo soso-kevitra hanatsarana na hampifanarahana amina asa.",
    tileInterview: "Interview Launch",
    tileRoadmap: "Career Roadmap Launch",
    comingSoon: "Ho avy tsy ho ela",
    open: "Sokafy",
    openAgent: "Sokafy ny {agent}",
    backHub: "Hiverina any amin’ny Career Launch Africa",
    backCv: "Hiverina any amin’ny CV Launch",
    next: "Manaraka",
    backStep: "Miverina",
    stepOf: "Dingana {current} amin’ny {total}",
    learnWhy: "Nahoana",
    hideLearn: "Afenina",
    finishQ: "Mila vita androany ve ianao?",
    finishYes: "Eny — tsy maintsy vita izao",
    finishNo: "Tsia — afaka tohizako any aoriana",
    finishYesHint: "Chat vonjimaika dia mety raha vita izao.",
    finishNoHint: "Mampiasà chat tsotra azonao sokafana indray. Aza mampiasa chat vonjimaika.",
    pathQ: "Inona no tianao hatao?",
    pathCreate: "Manomboka CV vaovao",
    pathCreateHint: "Hanoratra CV azo alaina Word na PDF izahay.",
    pathImprove: "Manatsara CV efa misy",
    pathImproveHint:
      "Soso-kevitra ihany. Mila apetakao ao amin’ny chat ny lahatsoratra CV anao ankehitriny. Ianao no manova ny rakitrao. Tsy hamorona na hisintona CV vaovao izahay.",
    pathTailor: "Mampifanaraka ny CV amin’ny asa iray",
    pathTailorHint:
      "Soso-kevitra ho an’ny asa. Mila apetakao ny CV anao sy ny lahatsoratra asa ao amin’ny chat. Ianao no manova ny rakitrao. Tsy hamorona na hisintona CV vaovao izahay.",
    pathContinue: "Hanohy ny famoronana",
    pathContinueHint: "Hampiditra ny rakitra fandrosoana avy amin’ny fotoana lasa ianao.",
    atsTitle: "Naoty ATS — tanjona: mihoatra ny 80",
    atsBlurb:
      "Amin’ity lalana ity dia hanombana ny chat raha vonona ho an’ny rindrambaiko mpampiasa (ATS) ny CV-nao. Ny tanjona dia mihoatra ny 80. Tombana izany, tsy naoty ofisialy.",
    atsLearnBody:
      "Ny ATS (Applicant Tracking System) dia rindrambaiko ampiasain’ny mpampiasa maro alohan’ny hamakiana ny CV. Tiany ny rakitra Word tsotsotra, tsanganana iray, lohateny mahazatra, daty mazava, tanàna miampy finday na WhatsApp, ary teny avy amin’ny asa raha marina tokoa. Sary, tabilao, tsanganana roa ary sary haingon-taratasy matetika tsy mandeha. Chat roa dia mety hanome isa samy hafa. Mahazatra izany. Mikendré mihoatra ny 80 alohan’ny hanaovana fangatahana.",
    keepTab:
      "Avelao misokatra ity onglet Career Launch Africa ity. Hiverina eto ianao. Aza hidiana.",
    loginFirst:
      "Raha milaza ny chat fa hiditra, midira aloha, dia hiverena eto. Ny fidirana dia mety hamafa izay voadika. Adikao indray eto raha foana ny fametahana.",
    copyWizard: "Adikao ny torolalana",
    copyTitle: "Adikao ny torolalana",
    tipsTitle: "Vakio aloha ity",
    copiedGoNext: "Voadika — manaraka",
    showWizard: "Aseho ny lahatsoratra torolalana",
    progressAria: "Fandrosoana",
    copied: "Voadika. Tsindrio Manaraka, dia sokafy ny chat ary apetaho.",
    copyFail: "Tsy voadika. Sokafy ny Aseho ny lahatsoratra torolalana dia adikao.",
    recopyHint: "Raha foana ny fametahana, adikao indray eto. Tsy mila vakina ny lahatsoratra lava.",
    openFirst: "Avy eo sokafy ity chat ity dia apetaho",
    ifBusy: "Raha be olona io chat io na lany ny hafatra maimaimpoana",
    deepSeekOnly: "DeepSeek — raha efa niditra ihany",
    readyCreateTitle: "Adikao, dia sokafy ny chat",
    readyImproveTitle: "Adikao, dia sokafy ny chat ho an’ny soso-kevitra",
    readyTailorTitle: "Adikao, dia sokafy ny chat ho an’ny asa",
    readyContinueTitle: "Hanohy ny famoronana — adikao, dia sokafy ny chat",
    readyContinueHelp:
      "Ao amin’ny chat, apetaho ny torolalana, andalana foana, avy eo ny lahatsoratra ao amin’ny rakitra fandrosoana, dia alefaso.",
    readyReturnCreate:
      "Rehefa miseho === CV START === ny chat, hiverena amin’ity onglet ity dia sokafy ny Amboary rakitra Word.",
    readyReturnSuggest:
      "Rehefa vita ny chat, ampiharo ny soso-kevitra misy laharana ao amin’ny rakitra CV-nao. Tsy misy rakitra vaovao alaina.",
    readySaveHelp: "Mila mijanona? Ao amin’ny chat, soraty ny Save. Avy eo hiverena eto dia sokafy ny Tahirizo ny fandrosoana.",
    makeWord: "Amboary rakitra Word",
    makeWordLater: "Aorian’ny chat: Amboary rakitra Word",
    saveProgressLink: "Tahirizo ny fandrosoana",
    secondOpinionTitle: "Tia tombana ATS hafa ve ianao?",
    secondOpinionHelp:
      "Apetaho ao amin’ny chat hafa io torolalana fohy io (ohatra Claude raha Gemini no nampiasainao). Avy eo apetaho ny lahatsoratra CV. Aza ampidirina rakitra.",
    copySecondOpinion: "Adikao ny torolalana fanombanana faharoa",
    copiedSecond: "Voadika — apetaho ao amin’ny chat hafa, dia apetaho ny lahatsoratra CV.",
    pasteOnly:
      "Apetaho fotsiny ny lahatsoratra. Aza ampidirina rakitra Word, PDF, na sary. Matetika tsy mandeha izany amin’ny kaonty maimaimpoana, na angatahina handoa.",
    makeWordTitle: "Amboary rakitra Word na PDF",
    pasteLabel: "Apetaho ny boaty avy amin’ny torolalana (hatramin’ny === CV START === ka hatramin’ny === CV END ===)",
    pastePlaceholder: "=== CV START ===\n...\n=== CV END ===",
    downloadWord: "Alaina ny rakitra Word",
    downloadPdf: "Alaina ny PDF",
    parseError:
      "Apetaho ny boaty avy amin’ny torolalana. Ilaina ny andalana === CV START === sy === CV END ===.",
    pdfFail: "Tsy vita ny PDF. Andramo ny Word, na havaozy ny pejy.",
    pasteProgressLabel:
      "Apetaho ny boaty fandrosoana (hatramin’ny === PROGRESS START === ka hatramin’ny === PROGRESS END ===)",
    builtLocal: "Amin’ity findrinao na solosainao ity no amboarina ny rakitra. Tsy hitanay izany.",
    wizardV: "Torolalana CV v1.1 — Septambra 2026",
    agentGemini: "Gemini",
    agentClaude: "Claude",
    agentDeepSeek: "DeepSeek",
    claudeWait:
      "Raha milaza ny Claude fa miandry: aza mandoa. Aza manomboka chat vaovao. Hiverena amin’io chat io any aoriana, na sokafy ny Gemini, hiverena eto, adikao indray ny torolalana, dia apetaho.",
    langAria: "Fitenin’ny tranonkala",
    saveProgressTitle: "Tahirizo ny fandrosoanao",
    saveProgressHelp:
      "Apetaho ny boaty avy amin’ny chat (hatramin’ny === PROGRESS START === ka hatramin’ny === PROGRESS END ===). Alaina amin’ity findrinao na solosainao ity. Any aoriana fidio ny Hanohy ny famoronana dia apetaho io rakitra io ao amin’ny chat.",
    downloadProgress: "Alaina ny rakitra fandrosoana",
    progressError:
      "Apetaho ny boaty fandrosoana. Ilaina ny andalana === PROGRESS START === sy === PROGRESS END ===.",
    progressPlaceholder: "=== PROGRESS START ===\n...\n=== PROGRESS END ===",
  },
};

const STORAGE_KEY = "cla-lang";

export function getLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && strings[saved]) return saved;
  } catch {
    /* Node tests and first paint without storage */
  }
  return "en";
}

export function setLang(id) {
  if (!strings[id]) return;
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    /* ignore */
  }
  if (typeof document !== "undefined") document.documentElement.lang = id;
}

export function t(key) {
  const lang = getLang();
  return strings[lang][key] || strings.en[key] || key;
}

export function tFormat(key, vars = {}) {
  return Object.entries(vars).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, value),
    t(key),
  );
}

export function localeKeySetsMatch() {
  const keys = Object.keys(strings.en).sort();
  return Object.keys(strings).every(
    (lang) => JSON.stringify(Object.keys(strings[lang]).sort()) === JSON.stringify(keys),
  );
}
