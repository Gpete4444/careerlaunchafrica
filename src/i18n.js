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
    weNeverStore: "We never save your answers on our computers.",
    hubHow:
      "First time here? Start with CV Launch.\n\n1. Copy instructions from this website.\n2. Paste them into a free chat (Gemini or Claude).\n3. Answer the chat’s questions, one at a time.\n4. Keep this website open. Come back when the chat is done.\n5. If you made a new CV, create it here in a Microsoft Word format. You can also make a PDF.",
    privacyPhone:
      "This file is built on your phone or computer. We never see it. Nothing is uploaded to us. Close this page and the text on screen is gone — so download any file you want to keep.",
    privacyChat:
      "You will use a free chat (Gemini or Claude) on another page. That chat is not us. We do not store your name, phone number, or CV.\n\nIf you might stop and continue later, log in and use a normal chat you can open again. Do not use a temporary or guest chat.",
    tileCv: "CV Launch",
    tileCvHint: "Make a new CV, continue one you started, or get ideas to improve a CV you already have.",
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
    progressTitle: "Progress",
    learnWhy: "Learn why",
    hideLearn: "Hide",
    finishQ: "Will you finish in one sitting?",
    finishYes: "Yes — I will finish now",
    finishNo: "No — I might stop and continue later",
    finishYesHint: "A temporary chat is OK if you will finish now and not close it.",
    finishNoHint: "Log in and use a normal chat you can open again later. Do not use a temporary or guest chat.",
    pathQ: "What do you want to do?",
    pathHow:
      "How this works if you have never done this before:\n\n1. Choose one option below.\n2. The next screens tell you exactly what to copy and where to paste it.\n3. Keep this Career Launch Africa page open. Open the chat in a new page.\n4. The chat asks one question at a time. Type your answer and send it.\n5. New CV: when the chat shows === CV START ===, come back here and tap Create the CV in a Microsoft Word format.\n6. Improve or tailor: the chat only gives suggestions. You change your own CV. There is no new file to download here.",
    pathCreate: "Start a new CV",
    pathCreateHint:
      "Use this if you do not have a CV yet. A chat will ask you questions. Then come back here to create the CV in a Microsoft Word format. You can also make a PDF.",
    pathImprove: "Improve a CV I already have",
    pathImproveHint:
      "Suggestions only. Paste your current CV as text into the chat. You change your own file. We will not create a new Word or PDF file on this path.",
    pathTailor: "Tailor my CV to a job",
    pathTailorHint:
      "Suggestions to match a job. Paste your CV text and the job text into the chat. You change your own file. We will not create a new Word or PDF file on this path.",
    pathContinue: "Continue creating",
    pathContinueHint:
      "Use this if you already started a new CV and downloaded a progress file. You will paste that file into the chat.",
    atsTitle: "Employer computer score (ATS) — aim above 80",
    atsBlurb:
      "Many companies use computer software (ATS) to scan CVs before a person reads them. The chat will give an estimated score. Aim above 80. This is a guess, not an official score.",
    atsLearnBody:
      "ATS means Applicant Tracking System. It is software many employers use before a person reads a CV. It works best with a simple Microsoft Word file, one column, normal headings, clear dates, your city plus phone or WhatsApp, and words from the job only if they are true about you. Photos, tables, two columns, and pictures often fail. Two chats can give two different numbers. That is normal. Aim above 80 before you apply.",
    keepTab:
      "Keep this Career Launch Africa page open. You will come back here. Do not close it. When you open the chat, let it open in a new page.",
    loginFirst:
      "If the chat asks you to log in, log in first. Logging in can erase what you copied. Come back to this page and tap Copy the instructions again if nothing appears when you paste.",
    copyWizard: "Copy the instructions",
    copyTitle: "Copy the instructions",
    copyHow:
      "You do not need to read the long text. Tap Copy the instructions. That copies them. Then tap I copied it — next.",
    tipsTitle: "Read this first",
    copiedGoNext: "I copied it — next",
    showWizard: "Show the instructions (only if copy did not work)",
    progressAria: "Progress",
    copied: "Copied. Now tap I copied it — next. Then open the chat and paste.",
    copyFail:
      "Could not copy automatically. Open Show the instructions, press and hold the text, choose Select all, then Copy.",
    recopyHint:
      "If nothing appears when you paste in the chat, come back here and tap Copy the instructions again. You do not need to read the long text.",
    openFirst: "Open the chat and paste",
    openHow:
      "1. Tap Open Gemini or Open Claude below. Keep this Career Launch Africa page open.\n2. In the chat, tap the empty message box.\n3. Paste: on a phone, press and hold, then tap Paste. On a computer, press Ctrl+V (Windows) or Cmd+V (Mac).\n4. Tap Send.\n5. Answer one question at a time. When you are done, come back to this page.",
    ifBusy: "If that chat is busy, full, or has no free messages left",
    deepSeekOnly: "DeepSeek — use this only if you are already logged in there",
    readyCreateTitle: "Copy the instructions, then open the chat",
    readyImproveTitle: "Copy the instructions, then open the chat for suggestions",
    readyTailorTitle: "Copy the instructions, then open the chat to match a job",
    readyContinueTitle: "Continue creating — copy the instructions, then open the chat",
    readyContinueHelp:
      "After you open the chat:\n1. Paste the instructions and send.\n2. Paste all the text from your progress file and send.\nIf the chat already asked a question, paste the progress file as your answer.",
    readyReturnCreate:
      "When the chat shows a block starting with === CV START === and ending with === CV END ===, do this:\n\n1. If you want changes, type 1 (Make adjustments) in the chat.\n2. When you are ready for the file, type 2 (Create the CV in a Microsoft Word format).\n3. Copy everything from === CV START === to === CV END ===, including those two lines.\n4. Come back to this Career Launch Africa page.\n5. Open Create the CV in a Microsoft Word format, paste the block, and tap that same button. You can also make a PDF.",
    readyReturnSuggest:
      "When the chat finishes, it gives numbered suggestions. Open your own CV file and make those changes yourself. This path does not create a new Word or PDF file.",
    readySaveHelp:
      "Need to stop before the CV is finished? In the chat, type Save and send. Copy the block that starts with === PROGRESS START ===. Come back here, open Save progress, paste it, and download the file onto this phone. Later choose Continue creating.",
    makeWord: "Create the CV in a Microsoft Word format",
    makeWordLater: "After the chat: Create the CV in a Microsoft Word format",
    saveProgressLink: "Save progress (if you need to stop)",
    secondOpinionTitle: "Want another ATS estimate?",
    secondOpinionHelp:
      "Copy this short text into a different chat (for example Claude if you used Gemini). Then paste your CV as text. Do not attach a file.",
    copySecondOpinion: "Copy the second-opinion instructions",
    copiedSecond: "Copied — paste it into another chat, then paste your CV as text.",
    pasteOnly:
      "In the chat, paste text only. Do not attach a Word file, PDF, or photo. Attaching often fails on a free account, or the chat asks you to pay. To copy a CV or job advert: open it, select the text, copy, then paste into the chat.",
    makeWordTitle: "Create the CV in a Microsoft Word format",
    makeWordHelp:
      "The chat cannot make a Microsoft Word file. You make it here, on this page.\n\n1. In the chat, copy everything from === CV START === to === CV END === (include those two lines).\n2. Paste it in the big box below.\n3. Tap Create the CV in a Microsoft Word format. The file saves onto this phone or computer. You can open it in Microsoft Word or Google Docs.\n4. To also make a PDF, tap Create the CV in a PDF format.",
    pasteLabel: "Paste the CV block here",
    pasteHow:
      "The first line should be === CV START ===. The last line should be === CV END ===. If paste is empty, go back to the chat, copy again, then paste here.",
    pastePlaceholder: "=== CV START ===\n...\n=== CV END ===",
    downloadWord: "Create the CV in a Microsoft Word format",
    downloadPdf: "Create the CV in a PDF format",
    parseError:
      "We could not read a CV in that box. Paste the text from the chat. It should include === CV START === and === CV END ===, or labelled lines such as FULL_NAME:.",
    parseReady: "Ready to create a Microsoft Word file for {name}.",
    pdfFail: "Could not create the PDF. Try Microsoft Word format, or reload this page.",
    pasteProgressLabel: "Paste the progress block here",
    builtLocal: "The file is built on this phone or computer. We never see it.",
    wizardV: "CV Launch v1.1 — Sep 2026",
    agentGemini: "Gemini",
    agentClaude: "Claude",
    agentDeepSeek: "DeepSeek",
    claudeWait:
      "If Claude says you must wait: do not pay. Do not start a new chat. Come back to this same chat later. Or open Gemini instead: come back to this Career Launch Africa page, copy the instructions again, and paste.",
    langAria: "Site language",
    saveProgressTitle: "Save your progress",
    saveProgressHelp:
      "Use this if you need to stop before the CV is finished.\n\n1. In the chat, type Save and send.\n2. Copy everything from === PROGRESS START === to === PROGRESS END === (include those two lines).\n3. Paste it in the big box below.\n4. Tap Download progress file. The file saves onto this phone or computer.\n5. Later, open CV Launch and choose Continue creating. Paste the new instructions in the chat, then paste this progress file.",
    downloadProgress: "Download progress file",
    progressError:
      "We could not read a progress file. Paste the block from the chat. It must include === PROGRESS START === and === PROGRESS END ===.",
    progressPlaceholder: "=== PROGRESS START ===\n...\n=== PROGRESS END ===",
  },
  fr: {
    brand: "Career Launch Africa",
    tagline: "Créez un CV. Entraînez-vous aux entretiens. Planifiez votre parcours.",
    weNeverStore: "Nous ne sauvegardons jamais vos réponses sur nos ordinateurs.",
    hubHow:
      "Première fois ici ? Commencez par CV Launch.\n\n1. Copiez les instructions de ce site.\n2. Collez-les dans un chat gratuit (Gemini ou Claude).\n3. Répondez aux questions du chat, une par une.\n4. Laissez ce site ouvert. Revenez quand le chat a fini.\n5. Si vous avez créé un nouveau CV, créez-le ici au format Microsoft Word. Vous pouvez aussi faire un PDF.",
    privacyPhone:
      "Ce fichier est créé sur votre téléphone ou votre ordinateur. Nous ne le voyons jamais. Rien n’est envoyé chez nous. Fermez cette page et le texte à l’écran disparaît — téléchargez donc tout fichier que vous voulez garder.",
    privacyChat:
      "Vous allez utiliser un chat gratuit (Gemini ou Claude) sur une autre page. Ce chat n’est pas nous. Nous ne stockons ni votre nom, ni votre numéro, ni votre CV.\n\nSi vous pouvez vous arrêter et continuer plus tard, connectez-vous et utilisez un chat normal que vous pourrez rouvrir. N’utilisez pas un chat temporaire ou invité.",
    tileCv: "CV Launch",
    tileCvHint: "Créer un nouveau CV, continuer un CV commencé, ou obtenir des idées pour améliorer un CV que vous avez déjà.",
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
    progressTitle: "Progression",
    learnWhy: "Pourquoi",
    hideLearn: "Masquer",
    finishQ: "Allez-vous tout terminer maintenant ?",
    finishYes: "Oui — je termine maintenant",
    finishNo: "Non — je peux m’arrêter et continuer plus tard",
    finishYesHint: "Un chat temporaire convient si vous terminez maintenant et ne le fermez pas.",
    finishNoHint: "Connectez-vous et utilisez un chat normal que vous pourrez rouvrir plus tard. Pas un chat temporaire ou invité.",
    pathQ: "Que voulez-vous faire ?",
    pathHow:
      "Comment ça marche si vous n’avez jamais fait cela :\n\n1. Choisissez une option ci-dessous.\n2. Les écrans suivants disent exactement quoi copier et où coller.\n3. Laissez cette page Career Launch Africa ouverte. Ouvrez le chat dans une nouvelle page.\n4. Le chat pose une question à la fois. Tapez votre réponse et envoyez.\n5. Nouveau CV : quand le chat montre === CV START ===, revenez ici et appuyez sur Créer le CV au format Microsoft Word.\n6. Améliorer ou adapter : le chat donne seulement des suggestions. Vous changez votre propre CV. Il n’y a pas de nouveau fichier à télécharger ici.",
    pathCreate: "Commencer un nouveau CV",
    pathCreateHint:
      "Utilisez ceci si vous n’avez pas encore de CV. Un chat va poser des questions. Puis revenez ici pour créer le CV au format Microsoft Word. Vous pouvez aussi faire un PDF.",
    pathImprove: "Améliorer un CV que j’ai déjà",
    pathImproveHint:
      "Suggestions seulement. Collez le texte de votre CV actuel dans le chat. Vous modifiez votre fichier. Nous ne créons pas de nouveau fichier Word ou PDF sur ce parcours.",
    pathTailor: "Adapter mon CV à une offre",
    pathTailorHint:
      "Suggestions pour une offre. Collez le texte de votre CV et le texte de l’offre dans le chat. Vous modifiez votre fichier. Nous ne créons pas de nouveau fichier Word ou PDF sur ce parcours.",
    pathContinue: "Continuer la création",
    pathContinueHint:
      "Utilisez ceci si vous avez déjà commencé un nouveau CV et téléchargé un fichier de progression. Vous collerez ce fichier dans le chat.",
    atsTitle: "Score ordinateur de l’employeur (ATS) — visez plus de 80",
    atsBlurb:
      "Beaucoup d’entreprises utilisent un logiciel (ATS) pour lire les CV avant une personne. Le chat donnera un score estimé. Visez plus de 80. C’est une estimation, pas un score officiel.",
    atsLearnBody:
      "ATS veut dire Applicant Tracking System. C’est un logiciel que beaucoup d’employeurs utilisent avant qu’une personne lise le CV. Il marche mieux avec un fichier Microsoft Word simple, une colonne, des titres habituels, des dates claires, votre ville plus le téléphone ou WhatsApp, et des mots de l’offre seulement s’ils sont vrais pour vous. Photos, tableaux, deux colonnes et images échouent souvent. Deux chats peuvent donner deux chiffres. C’est normal. Visez plus de 80 avant de postuler.",
    keepTab:
      "Laissez cette page Career Launch Africa ouverte. Vous reviendrez ici. Ne la fermez pas. Quand vous ouvrez le chat, laissez-le s’ouvrir dans une nouvelle page.",
    loginFirst:
      "Si le chat demande une connexion, connectez-vous d’abord. La connexion peut effacer ce que vous avez copié. Revenez à cette page et appuyez de nouveau sur Copier les instructions si rien n’apparaît quand vous collez.",
    copyWizard: "Copier les instructions",
    copyTitle: "Copier les instructions",
    copyHow:
      "Vous n’avez pas besoin de lire le long texte. Appuyez sur Copier les instructions. Puis appuyez sur J’ai copié — suivant.",
    tipsTitle: "Lisez ceci d’abord",
    copiedGoNext: "J’ai copié — suivant",
    showWizard: "Afficher les instructions (seulement si la copie n’a pas marché)",
    progressAria: "Progression",
    copied: "Copié. Maintenant appuyez sur J’ai copié — suivant. Puis ouvrez le chat et collez.",
    copyFail:
      "Copie automatique impossible. Ouvrez Afficher les instructions, appuyez longtemps sur le texte, choisissez Tout sélectionner, puis Copier.",
    recopyHint:
      "Si rien n’apparaît quand vous collez dans le chat, revenez ici et appuyez de nouveau sur Copier les instructions. Vous n’avez pas besoin de lire le long texte.",
    openFirst: "Ouvrez le chat et collez",
    openHow:
      "1. Appuyez sur Ouvrir Gemini ou Ouvrir Claude ci-dessous. Laissez cette page Career Launch Africa ouverte.\n2. Dans le chat, appuyez sur la case de message vide.\n3. Coller : sur un téléphone, appuyez longtemps, puis Collez. Sur un ordinateur, appuyez sur Ctrl+V (Windows) ou Cmd+V (Mac).\n4. Appuyez sur Envoyer.\n5. Répondez à une question à la fois. Quand vous avez fini, revenez à cette page.",
    ifBusy: "Si ce chat est occupé, plein, ou sans messages gratuits",
    deepSeekOnly: "DeepSeek — seulement si vous êtes déjà connecté là-bas",
    readyCreateTitle: "Copiez les instructions, puis ouvrez le chat",
    readyImproveTitle: "Copiez les instructions, puis ouvrez le chat pour des suggestions",
    readyTailorTitle: "Copiez les instructions, puis ouvrez le chat pour une offre",
    readyContinueTitle: "Continuer la création — copiez les instructions, puis ouvrez le chat",
    readyContinueHelp:
      "Après avoir ouvert le chat :\n1. Collez les instructions et envoyez.\n2. Collez tout le texte de votre fichier de progression et envoyez.\nSi le chat a déjà posé une question, collez le fichier de progression comme réponse.",
    readyReturnCreate:
      "Quand le chat montre un bloc qui commence par === CV START === et finit par === CV END ===, faites ceci :\n\n1. Si vous voulez des changements, tapez 1 (Make adjustments) dans le chat.\n2. Quand vous voulez le fichier, tapez 2 (Create the CV in a Microsoft Word format).\n3. Copiez tout de === CV START === à === CV END ===, y compris ces deux lignes.\n4. Revenez à cette page Career Launch Africa.\n5. Ouvrez Créer le CV au format Microsoft Word, collez le bloc, et appuyez sur le même bouton. Vous pouvez aussi faire un PDF.",
    readyReturnSuggest:
      "Quand le chat a fini, il donne des suggestions numérotées. Ouvrez votre propre fichier CV et faites ces changements vous-même. Ce parcours ne crée pas de nouveau fichier Word ou PDF.",
    readySaveHelp:
      "Besoin de vous arrêter avant la fin du CV ? Dans le chat, tapez Save et envoyez. Copiez le bloc qui commence par === PROGRESS START ===. Revenez ici, ouvrez Enregistrer la progression, collez, et téléchargez le fichier sur ce téléphone. Plus tard, choisissez Continuer la création.",
    makeWord: "Créer le CV au format Microsoft Word",
    makeWordLater: "Après le chat : Créer le CV au format Microsoft Word",
    saveProgressLink: "Enregistrer la progression (si vous devez vous arrêter)",
    secondOpinionTitle: "Un autre avis ATS ?",
    secondOpinionHelp:
      "Copiez ce court texte dans un autre chat (par exemple Claude si vous avez utilisé Gemini). Puis collez votre CV en texte. N’ajoutez pas de fichier.",
    copySecondOpinion: "Copier les instructions de second avis",
    copiedSecond: "Copié — collez-le dans un autre chat, puis collez votre CV en texte.",
    pasteOnly:
      "Dans le chat, collez seulement le texte. N’ajoutez pas de fichier Word, PDF ou photo. Joindre un fichier échoue souvent sur un compte gratuit, ou le chat demande un paiement. Pour copier un CV ou une offre : ouvrez-le, sélectionnez le texte, copiez, puis collez dans le chat.",
    makeWordTitle: "Créer le CV au format Microsoft Word",
    makeWordHelp:
      "Le chat ne peut pas créer un fichier Microsoft Word. Vous le créez ici, sur cette page.\n\n1. Dans le chat, copiez tout de === CV START === à === CV END === (y compris ces deux lignes).\n2. Collez-le dans la grande case ci-dessous.\n3. Appuyez sur Créer le CV au format Microsoft Word. Le fichier s’enregistre sur ce téléphone ou cet ordinateur. Vous pouvez l’ouvrir dans Microsoft Word ou Google Docs.\n4. Pour faire aussi un PDF, appuyez sur Créer le CV au format PDF.",
    pasteLabel: "Collez le bloc du CV ici",
    pasteHow:
      "La première ligne doit être === CV START ===. La dernière ligne doit être === CV END ===. Si le collage est vide, retournez au chat, copiez encore, puis collez ici.",
    pastePlaceholder: "=== CV START ===\n...\n=== CV END ===",
    downloadWord: "Créer le CV au format Microsoft Word",
    downloadPdf: "Créer le CV au format PDF",
    parseError:
      "Nous n’avons pas pu lire un CV dans cette case. Collez le texte du chat. Il doit inclure === CV START === et === CV END ===, ou des lignes comme FULL_NAME:.",
    parseReady: "Prêt à créer un fichier Microsoft Word pour {name}.",
    pdfFail: "Impossible de créer le PDF. Essayez le format Microsoft Word, ou rechargez cette page.",
    pasteProgressLabel: "Collez le bloc de progression ici",
    builtLocal: "Le fichier est créé sur ce téléphone ou cet ordinateur. Nous ne le voyons jamais.",
    wizardV: "CV Launch v1.1 — sept. 2026",
    agentGemini: "Gemini",
    agentClaude: "Claude",
    agentDeepSeek: "DeepSeek",
    claudeWait:
      "Si Claude dit d’attendre : ne payez pas. N’ouvrez pas un nouveau chat. Revenez à ce même chat plus tard. Ou ouvrez Gemini : revenez à cette page Career Launch Africa, copiez encore les instructions, et collez.",
    langAria: "Langue du site",
    saveProgressTitle: "Enregistrer la progression",
    saveProgressHelp:
      "Utilisez ceci si vous devez vous arrêter avant la fin du CV.\n\n1. Dans le chat, tapez Save et envoyez.\n2. Copiez tout de === PROGRESS START === à === PROGRESS END === (y compris ces deux lignes).\n3. Collez-le dans la grande case ci-dessous.\n4. Appuyez sur Télécharger le fichier de progression. Le fichier s’enregistre sur ce téléphone ou cet ordinateur.\n5. Plus tard, ouvrez CV Launch et choisissez Continuer la création. Collez les nouvelles instructions dans le chat, puis collez ce fichier de progression.",
    downloadProgress: "Télécharger le fichier de progression",
    progressError:
      "Nous n’avons pas pu lire un fichier de progression. Collez le bloc du chat. Il doit inclure === PROGRESS START === et === PROGRESS END ===.",
    progressPlaceholder: "=== PROGRESS START ===\n...\n=== PROGRESS END ===",
  },
  pt: {
    brand: "Career Launch Africa",
    tagline: "Crie um CV. Pratique entrevistas. Planeie a sua carreira.",
    weNeverStore: "Nunca guardamos as suas respostas nos nossos computadores.",
    hubHow:
      "Primeira vez aqui? Comece por CV Launch.\n\n1. Copie as instruções deste site.\n2. Cole-as num chat gratuito (Gemini ou Claude).\n3. Responda às perguntas do chat, uma de cada vez.\n4. Deixe este site aberto. Volte quando o chat terminar.\n5. Se fez um CV novo, crie-o aqui em formato Microsoft Word. Também pode fazer um PDF.",
    privacyPhone:
      "Este ficheiro é criado no seu telemóvel ou computador. Nunca o vemos. Nada é enviado para nós. Feche esta página e o texto no ecrã desaparece — por isso descarregue qualquer ficheiro que queira guardar.",
    privacyChat:
      "Vai usar um chat gratuito (Gemini ou Claude) noutra página. Esse chat não somos nós. Não guardamos o seu nome, número de telefone, nem o seu CV.\n\nSe puder parar e continuar mais tarde, inicie sessão e use um chat normal que possa abrir outra vez. Não use um chat temporário ou de convidado.",
    tileCv: "CV Launch",
    tileCvHint: "Fazer um CV novo, continuar um que já começou, ou obter ideias para melhorar um CV que já tem.",
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
    progressTitle: "Progresso",
    learnWhy: "Saber porquê",
    hideLearn: "Esconder",
    finishQ: "Vai terminar tudo agora?",
    finishYes: "Sim — vou terminar agora",
    finishNo: "Não — posso parar e continuar mais tarde",
    finishYesHint: "Um chat temporário serve se for terminar agora e não o fechar.",
    finishNoHint: "Inicie sessão e use um chat normal que possa abrir outra vez mais tarde. Não use um chat temporário ou de convidado.",
    pathQ: "O que quer fazer?",
    pathHow:
      "Como isto funciona se nunca fez isto antes:\n\n1. Escolha uma opção abaixo.\n2. Os ecrãs seguintes dizem exactamente o que copiar e onde colar.\n3. Deixe esta página Career Launch Africa aberta. Abra o chat numa página nova.\n4. O chat faz uma pergunta de cada vez. Escreva a resposta e envie.\n5. CV novo: quando o chat mostrar === CV START ===, volte aqui e toque em Criar o CV em formato Microsoft Word.\n6. Melhorar ou adaptar: o chat só dá sugestões. Você altera o seu próprio CV. Não há ficheiro novo para descarregar aqui.",
    pathCreate: "Começar um CV novo",
    pathCreateHint:
      "Use isto se ainda não tem um CV. Um chat vai fazer perguntas. Depois volte aqui para criar o CV em formato Microsoft Word. Também pode fazer um PDF.",
    pathImprove: "Melhorar um CV que já tenho",
    pathImproveHint:
      "Só sugestões. Cole o texto do seu CV atual no chat. Altera o seu próprio ficheiro. Não criamos um ficheiro Word ou PDF novo neste percurso.",
    pathTailor: "Adaptar o meu CV a uma vaga",
    pathTailorHint:
      "Sugestões para uma vaga. Cole o texto do seu CV e o texto da vaga no chat. Altera o seu próprio ficheiro. Não criamos um ficheiro Word ou PDF novo neste percurso.",
    pathContinue: "Continuar a criar",
    pathContinueHint:
      "Use isto se já começou um CV novo e descarregou um ficheiro de progresso. Vai colar esse ficheiro no chat.",
    atsTitle: "Pontuação do computador do empregador (ATS) — mire acima de 80",
    atsBlurb:
      "Muitas empresas usam software (ATS) para ler CVs antes de uma pessoa. O chat dá uma pontuação estimada. Mire acima de 80. É um palpite, não uma pontuação oficial.",
    atsLearnBody:
      "ATS significa Applicant Tracking System. É software que muitos empregadores usam antes de uma pessoa ler o CV. Funciona melhor com um ficheiro Microsoft Word simples, uma coluna, títulos habituais, datas claras, a sua cidade mais telefone ou WhatsApp, e palavras da vaga só se forem verdade sobre si. Fotos, tabelas, duas colunas e imagens falham muitas vezes. Dois chats podem dar dois números. É normal. Mire acima de 80 antes de se candidatar.",
    keepTab:
      "Deixe esta página Career Launch Africa aberta. Vai voltar aqui. Não a feche. Quando abrir o chat, deixe-o abrir numa página nova.",
    loginFirst:
      "Se o chat pedir início de sessão, entre primeiro. O início de sessão pode apagar o que copiou. Volte a esta página e toque outra vez em Copiar as instruções se nada aparecer quando colar.",
    copyWizard: "Copiar as instruções",
    copyTitle: "Copiar as instruções",
    copyHow:
      "Não precisa de ler o texto longo. Toque em Copiar as instruções. Depois toque em Já copiei — seguinte.",
    tipsTitle: "Leia isto primeiro",
    copiedGoNext: "Já copiei — seguinte",
    showWizard: "Mostrar as instruções (só se copiar não funcionou)",
    progressAria: "Progresso",
    copied: "Copiado. Agora toque em Já copiei — seguinte. Depois abra o chat e cole.",
    copyFail:
      "Não foi possível copiar automaticamente. Abra Mostrar as instruções, prima e segure o texto, escolha Selecionar tudo, depois Copiar.",
    recopyHint:
      "Se nada aparecer quando colar no chat, volte aqui e toque outra vez em Copiar as instruções. Não precisa de ler o texto longo.",
    openFirst: "Abra o chat e cole",
    openHow:
      "1. Toque em Abrir Gemini ou Abrir Claude abaixo. Deixe esta página Career Launch Africa aberta.\n2. No chat, toque na caixa de mensagem vazia.\n3. Colar: no telemóvel, prima e segure, depois toque em Colar. No computador, prima Ctrl+V (Windows) ou Cmd+V (Mac).\n4. Toque em Enviar.\n5. Responda a uma pergunta de cada vez. Quando terminar, volte a esta página.",
    ifBusy: "Se esse chat estiver ocupado, cheio, ou sem mensagens grátis",
    deepSeekOnly: "DeepSeek — só se já tiver sessão iniciada lá",
    readyCreateTitle: "Copie as instruções, depois abra o chat",
    readyImproveTitle: "Copie as instruções, depois abra o chat para sugestões",
    readyTailorTitle: "Copie as instruções, depois abra o chat para uma vaga",
    readyContinueTitle: "Continuar a criar — copie as instruções, depois abra o chat",
    readyContinueHelp:
      "Depois de abrir o chat:\n1. Cole as instruções e envie.\n2. Cole todo o texto do ficheiro de progresso e envie.\nSe o chat já fez uma pergunta, cole o ficheiro de progresso como resposta.",
    readyReturnCreate:
      "Quando o chat mostrar um bloco que começa com === CV START === e acaba com === CV END ===, faça isto:\n\n1. Se quiser alterações, escreva 1 (Make adjustments) no chat.\n2. Quando quiser o ficheiro, escreva 2 (Create the CV in a Microsoft Word format).\n3. Copie tudo de === CV START === até === CV END ===, incluindo essas duas linhas.\n4. Volte a esta página Career Launch Africa.\n5. Abra Criar o CV em formato Microsoft Word, cole o bloco, e toque no mesmo botão. Também pode fazer um PDF.",
    readyReturnSuggest:
      "Quando o chat terminar, dá sugestões numeradas. Abra o seu próprio ficheiro de CV e faça essas alterações. Este percurso não cria um ficheiro Word ou PDF novo.",
    readySaveHelp:
      "Precisa parar antes do CV estar pronto? No chat, escreva Save e envie. Copie o bloco que começa com === PROGRESS START ===. Volte aqui, abra Guardar progresso, cole, e descarregue o ficheiro para este telemóvel. Mais tarde escolha Continuar a criar.",
    makeWord: "Criar o CV em formato Microsoft Word",
    makeWordLater: "Depois do chat: Criar o CV em formato Microsoft Word",
    saveProgressLink: "Guardar progresso (se precisar parar)",
    secondOpinionTitle: "Outra estimativa ATS?",
    secondOpinionHelp:
      "Copie este texto curto noutro chat (por exemplo Claude se usou Gemini). Depois cole o seu CV como texto. Não anexe um ficheiro.",
    copySecondOpinion: "Copiar as instruções de segunda opinião",
    copiedSecond: "Copiado — cole noutro chat e depois cole o seu CV como texto.",
    pasteOnly:
      "No chat, cole só o texto. Não anexe Word, PDF ou foto. Anexar muitas vezes falha na conta grátis, ou o chat pede pagamento. Para copiar um CV ou um anúncio: abra-o, selecione o texto, copie, depois cole no chat.",
    makeWordTitle: "Criar o CV em formato Microsoft Word",
    makeWordHelp:
      "O chat não pode criar um ficheiro Microsoft Word. Você cria-o aqui, nesta página.\n\n1. No chat, copie tudo de === CV START === até === CV END === (inclua essas duas linhas).\n2. Cole na caixa grande abaixo.\n3. Toque em Criar o CV em formato Microsoft Word. O ficheiro guarda neste telemóvel ou computador. Pode abri-lo no Microsoft Word ou no Google Docs.\n4. Para fazer também um PDF, toque em Criar o CV em formato PDF.",
    pasteLabel: "Cole o bloco do CV aqui",
    pasteHow:
      "A primeira linha deve ser === CV START ===. A última linha deve ser === CV END ===. Se colar vazio, volte ao chat, copie outra vez, depois cole aqui.",
    pastePlaceholder: "=== CV START ===\n...\n=== CV END ===",
    downloadWord: "Criar o CV em formato Microsoft Word",
    downloadPdf: "Criar o CV em formato PDF",
    parseError:
      "Não conseguimos ler um CV nessa caixa. Cole o texto do chat. Deve incluir === CV START === e === CV END ===, ou linhas como FULL_NAME:.",
    parseReady: "Pronto para criar um ficheiro Microsoft Word para {name}.",
    pdfFail: "Não foi possível criar o PDF. Tente o formato Microsoft Word, ou recarregue esta página.",
    pasteProgressLabel: "Cole o bloco de progresso aqui",
    builtLocal: "O ficheiro é criado neste telemóvel ou computador. Nunca o vemos.",
    wizardV: "CV Launch v1.1 — set. 2026",
    agentGemini: "Gemini",
    agentClaude: "Claude",
    agentDeepSeek: "DeepSeek",
    claudeWait:
      "Se o Claude disser para esperar: não pague. Não comece um chat novo. Volte a este mesmo chat mais tarde. Ou abra o Gemini: volte a esta página Career Launch Africa, copie as instruções outra vez, e cole.",
    langAria: "Idioma do site",
    saveProgressTitle: "Guardar o progresso",
    saveProgressHelp:
      "Use isto se precisar parar antes do CV estar pronto.\n\n1. No chat, escreva Save e envie.\n2. Copie tudo de === PROGRESS START === até === PROGRESS END === (inclua essas duas linhas).\n3. Cole na caixa grande abaixo.\n4. Toque em Descarregar o ficheiro de progresso. O ficheiro guarda neste telemóvel ou computador.\n5. Mais tarde, abra CV Launch e escolha Continuar a criar. Cole as novas instruções no chat, depois cole este ficheiro de progresso.",
    downloadProgress: "Descarregar o ficheiro de progresso",
    progressError:
      "Não conseguimos ler um ficheiro de progresso. Cole o bloco do chat. Deve incluir === PROGRESS START === e === PROGRESS END ===.",
    progressPlaceholder: "=== PROGRESS START ===\n...\n=== PROGRESS END ===",
  },
  sw: {
    brand: "Career Launch Africa",
    tagline: "Tengeneza CV. Fanya mazoezi ya mahojiano. Panga kazi.",
    weNeverStore: "Hatuwezi kuhifadhi majibu yako kwenye kompyuta zetu.",
    hubHow:
      "Mara ya kwanza hapa? Anza na CV Launch.\n\n1. Nakili maelekezo kutoka tovuti hii.\n2. Bandika kwenye gumzo la bure (Gemini au Claude).\n3. Jibu maswali ya gumzo, moja baada ya jingine.\n4. Acha tovuti hii wazi. Rudi gumzo linapomaliza.\n5. Ukitengeneza CV mpya, itengeneze hapa katika umbo la Microsoft Word. Unaweza pia kutengeneza PDF.",
    privacyPhone:
      "Faili hili linatengenezwa kwenye simu yako au kompyuta yako. Hatulioni. Hakuna kinachotumwa kwetu. Funga ukurasa huu na maandishi kwenye skrini yatatoweka — kwa hiyo pakua faili lolote unalotaka kuhifadhi.",
    privacyChat:
      "Utatumia gumzo la bure (Gemini au Claude) kwenye ukurasa mwingine. Gumzo hilo si sisi. Hatuwezi kuhifadhi jina lako, namba ya simu, wala CV yako.\n\nUkitaka kusimama na kuendelea baadaye, ingia akaunti na tumia gumzo la kawaida unaloweza kufungua tena. Usitumie gumzo la muda au la mgeni.",
    tileCv: "CV Launch",
    tileCvHint: "Tengeneza CV mpya, endelea na uliyoanza, au pata mawazo ya kuboresha CV uliyo nayo.",
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
    progressTitle: "Maendeleo",
    learnWhy: "Kwa nini",
    hideLearn: "Ficha",
    finishQ: "Je, utamaliza sasa hivi?",
    finishYes: "Ndiyo — nitamaliza sasa",
    finishNo: "Hapana — naweza kusimama na kuendelea baadaye",
    finishYesHint: "Gumzo la muda linatosha ukimaliza sasa na usilifunge.",
    finishNoHint: "Ingia akaunti na tumia gumzo la kawaida unaloweza kufungua tena baadaye. Usitumie gumzo la muda au la mgeni.",
    pathQ: "Unataka kufanya nini?",
    pathHow:
      "Jinsi hii inavyofanya kazi ikiwa hujawahi kufanya hivi:\n\n1. Chagua chaguo moja hapa chini.\n2. Skrini zinazofuata zitasema nini unakili na wapi unabandika.\n3. Acha ukurasa huu wa Career Launch Africa wazi. Fungua gumzo kwenye ukurasa mpya.\n4. Gumzo linauliza swali moja kwa wakati. Andika jibu na tuma.\n5. CV mpya: gumzo linapoonyesha === CV START ===, rudi hapa na uguse Tengeneza CV katika umbo la Microsoft Word.\n6. Boresha au linganisha: gumzo linatoa mapendekezo tu. Unabadilisha CV yako. Hakuna faili jipya la kupakua hapa.",
    pathCreate: "Anza CV mpya",
    pathCreateHint:
      "Tumia hii kama bado huna CV. Gumzo litauliza maswali. Kisha rudi hapa utengeneze CV katika umbo la Microsoft Word. Unaweza pia kutengeneza PDF.",
    pathImprove: "Boresha CV niliyo nayo",
    pathImproveHint:
      "Mapendekezo tu. Bandika maandishi ya CV yako ya sasa kwenye gumzo. Unabadilisha faili lako. Hatutengenezi faili jipya la Word au PDF katika njia hii.",
    pathTailor: "Linganisha CV yangu na kazi",
    pathTailorHint:
      "Mapendekezo ya kulingana na kazi. Bandika maandishi ya CV yako na maandishi ya kazi kwenye gumzo. Unabadilisha faili lako. Hatutengenezi faili jipya la Word au PDF katika njia hii.",
    pathContinue: "Endelea kutengeneza",
    pathContinueHint:
      "Tumia hii kama tayari ulianza CV mpya na ukapakua faili la maendeleo. Utabandika faili hilo kwenye gumzo.",
    atsTitle: "Alama ya kompyuta ya mwajiri (ATS) — lenga zaidi ya 80",
    atsBlurb:
      "Makampuni mengi hutumia programu (ATS) kusoma CV kabla mtu kusoma. Gumzo litatoa alama ya makadirio. Lenga zaidi ya 80. Hii ni makadirio, si alama rasmi.",
    atsLearnBody:
      "ATS inamaanisha Applicant Tracking System. Ni programu waajiri wengi hutumia kabla mtu kusoma CV. Inafanya kazi vizuri zaidi na faili rahisi la Microsoft Word, safu moja, vichwa vya kawaida, tarehe wazi, mji wako pamoja na simu au WhatsApp, na maneno ya kazi ikiwa ni kweli kukuhusu. Picha, jedwali, safu mbili na michoro mara nyingi vinashindwa. Gumzo mbili zinaweza kutoa namba tofauti. Ni kawaida. Lenga zaidi ya 80 kabla ya kuomba kazi.",
    keepTab:
      "Acha ukurasa huu wa Career Launch Africa wazi. Utarudi hapa. Usifunge. Unapofungua gumzo, liachie kufunguka kwenye ukurasa mpya.",
    loginFirst:
      "Ikiwa gumzo linaomba kuingia, ingia kwanza. Kuingia kunaweza kufuta ulichokopa. Rudi kwenye ukurasa huu na uguse tena Nakili maelekezo ikiwa hakuna kinachoonekana unapobandika.",
    copyWizard: "Nakili maelekezo",
    copyTitle: "Nakili maelekezo",
    copyHow:
      "Huhitaji kusoma maandishi marefu. Gusa Nakili maelekezo. Kisha gusa Nimenakili — endelea.",
    tipsTitle: "Soma hii kwanza",
    copiedGoNext: "Nimenakili — endelea",
    showWizard: "Onyesha maelekezo (tu kama kunakili hakukufanikiwa)",
    progressAria: "Maendeleo",
    copied: "Imenakiliwa. Sasa gusa Nimenakili — endelea. Kisha fungua gumzo na ubandike.",
    copyFail:
      "Imeshindwa kunakili yenyewe. Fungua Onyesha maelekezo, bonyeza na ushikilie maandishi, chagua Chagua yote, kisha Nakili.",
    recopyHint:
      "Ikiwa hakuna kinachoonekana unapobandika kwenye gumzo, rudi hapa na uguse tena Nakili maelekezo. Huhitaji kusoma maandishi marefu.",
    openFirst: "Fungua gumzo na ubandike",
    openHow:
      "1. Gusa Fungua Gemini au Fungua Claude hapa chini. Acha ukurasa huu wa Career Launch Africa wazi.\n2. Kwenye gumzo, gusa kisanduku tupu cha ujumbe.\n3. Kubandika: kwenye simu, bonyeza na ushikilie, kisha gusa Bandika. Kwenye kompyuta, bonyeza Ctrl+V (Windows) au Cmd+V (Mac).\n4. Gusa Tuma.\n5. Jibu swali moja kwa wakati. Ukimaliza, rudi kwenye ukurasa huu.",
    ifBusy: "Ikiwa gumzo hilo limejaa, limebusy, au hamna ujumbe wa bure",
    deepSeekOnly: "DeepSeek — tumia tu kama tayari umeingia huko",
    readyCreateTitle: "Nakili maelekezo, kisha fungua gumzo",
    readyImproveTitle: "Nakili maelekezo, kisha fungua gumzo la mapendekezo",
    readyTailorTitle: "Nakili maelekezo, kisha fungua gumzo la kulinganisha kazi",
    readyContinueTitle: "Endelea kutengeneza — nakili maelekezo, kisha fungua gumzo",
    readyContinueHelp:
      "Baada ya kufungua gumzo:\n1. Bandika maelekezo na tuma.\n2. Bandika maandishi yote ya faili lako la maendeleo na tuma.\nIkiwa gumzo tayari limeuliza swali, bandika faili la maendeleo kama jibu.",
    readyReturnCreate:
      "Gumzo linapoonyesha kizuizi kinachoanza === CV START === na kuisha === CV END ===, fanya hivi:\n\n1. Ikiwa unataka mabadiliko, andika 1 (Make adjustments) kwenye gumzo.\n2. Ukiwa tayari kwa faili, andika 2 (Create the CV in a Microsoft Word format).\n3. Nakili kila kitu kutoka === CV START === hadi === CV END ===, pamoja na mistari hiyo miwili.\n4. Rudi kwenye ukurasa huu wa Career Launch Africa.\n5. Fungua Tengeneza CV katika umbo la Microsoft Word, bandika kizuizi, kisha gusa kitufe kile kile. Unaweza pia kutengeneza PDF.",
    readyReturnSuggest:
      "Gumzo likimaliza, linatoa mapendekezo yenye namba. Fungua faili lako la CV na ufanye mabadiliko mwenyewe. Njia hii haitengenezi faili jipya la Word au PDF.",
    readySaveHelp:
      "Unahitaji kusimama kabla CV haijakamilika? Kwenye gumzo, andika Save na tuma. Nakili kizuizi kinachoanza === PROGRESS START ===. Rudi hapa, fungua Hifadhi maendeleo, bandika, na upakue faili kwenye simu hii. Baadaye chagua Endelea kutengeneza.",
    makeWord: "Tengeneza CV katika umbo la Microsoft Word",
    makeWordLater: "Baada ya gumzo: Tengeneza CV katika umbo la Microsoft Word",
    saveProgressLink: "Hifadhi maendeleo (kama unahitaji kusimama)",
    secondOpinionTitle: "Unataka makadirio mengine ya ATS?",
    secondOpinionHelp:
      "Nakili maandishi haya mafupi kwenye gumzo lingine (kwa mfano Claude ikiwa ulitumia Gemini). Kisha bandika CV yako kama maandishi. Usipakie faili.",
    copySecondOpinion: "Nakili maelekezo ya maoni ya pili",
    copiedSecond: "Imenakiliwa — bandika kwenye gumzo lingine, kisha bandika CV yako kama maandishi.",
    pasteOnly:
      "Kwenye gumzo, bandika maandishi tu. Usipakie faili la Word, PDF, wala picha. Kupakia mara nyingi kunashindwa kwenye akaunti ya bure, au gumzo linaomba malipo. Kunakili CV au tangazo la kazi: fungua, chagua maandishi, nakili, kisha bandika kwenye gumzo.",
    makeWordTitle: "Tengeneza CV katika umbo la Microsoft Word",
    makeWordHelp:
      "Gumzo haliwezi kutengeneza faili la Microsoft Word. Unalitengeneza hapa, kwenye ukurasa huu.\n\n1. Kwenye gumzo, nakili kila kitu kutoka === CV START === hadi === CV END === (pamoja na mistari hiyo miwili).\n2. Bandika kwenye kisanduku kikubwa hapa chini.\n3. Gusa Tengeneza CV katika umbo la Microsoft Word. Faili linahifadhiwa kwenye simu hii au kompyuta. Unaweza kulifungua katika Microsoft Word au Google Docs.\n4. Kutengeneza PDF pia, gusa Tengeneza CV katika umbo la PDF.",
    pasteLabel: "Bandika kizuizi cha CV hapa",
    pasteHow:
      "Mstari wa kwanza unapaswa kuwa === CV START ===. Mstari wa mwisho unapaswa kuwa === CV END ===. Ikiwa kubandika ni tupu, rudi kwenye gumzo, nakili tena, kisha bandika hapa.",
    pastePlaceholder: "=== CV START ===\n...\n=== CV END ===",
    downloadWord: "Tengeneza CV katika umbo la Microsoft Word",
    downloadPdf: "Tengeneza CV katika umbo la PDF",
    parseError:
      "Hatukuweza kusoma CV katika kisanduku hicho. Bandika maandishi kutoka gumzo. Yanapaswa kuwa na === CV START === na === CV END ===, au mistari kama FULL_NAME:.",
    parseReady: "Tayari kutengeneza faili la Microsoft Word la {name}.",
    pdfFail: "Imeshindwa kutengeneza PDF. Jaribu umbo la Microsoft Word, au pakia ukurasa huu tena.",
    pasteProgressLabel: "Bandika kizuizi cha maendeleo hapa",
    builtLocal: "Faili linatengenezwa kwenye simu hii au kompyuta. Hatulioni.",
    wizardV: "CV Launch v1.1 — Septemba 2026",
    agentGemini: "Gemini",
    agentClaude: "Claude",
    agentDeepSeek: "DeepSeek",
    claudeWait:
      "Ikiwa Claude anasema usubiri: usilipe. Usianzishe gumzo jipya. Rudi kwenye gumzo hilo hilo baadaye. Au fungua Gemini: rudi kwenye ukurasa huu wa Career Launch Africa, nakili maelekezo tena, kisha bandika.",
    langAria: "Lugha ya tovuti",
    saveProgressTitle: "Hifadhi maendeleo yako",
    saveProgressHelp:
      "Tumia hii kama unahitaji kusimama kabla CV haijakamilika.\n\n1. Kwenye gumzo, andika Save na tuma.\n2. Nakili kila kitu kutoka === PROGRESS START === hadi === PROGRESS END === (pamoja na mistari hiyo miwili).\n3. Bandika kwenye kisanduku kikubwa hapa chini.\n4. Gusa Pakua faili la maendeleo. Faili linahifadhiwa kwenye simu hii au kompyuta.\n5. Baadaye, fungua CV Launch na uchague Endelea kutengeneza. Bandika maelekezo mapya kwenye gumzo, kisha bandika faili hili la maendeleo.",
    downloadProgress: "Pakua faili la maendeleo",
    progressError:
      "Hatukuweza kusoma faili la maendeleo. Bandika kizuizi kutoka gumzo. Lazima kiwe na === PROGRESS START === na === PROGRESS END ===.",
    progressPlaceholder: "=== PROGRESS START ===\n...\n=== PROGRESS END ===",
  },
  mg: {
    brand: "Career Launch Africa",
    tagline: "Mamorona CV. Mianatra dinidinika. Manomana ny asanao.",
    weNeverStore: "Tsy tehirizinay amin’ny solosainay ny valinteninao.",
    hubHow:
      "Voalohany eto? Manomboha amin’ny CV Launch.\n\n1. Adikao ny torolalana avy amin’ity tranonkala ity.\n2. Apetaho ao amin’ny chat maimaimpoana (Gemini na Claude).\n3. Valio ny fanontaniana, iray isaky ny fotoana.\n4. Avelao misokatra ity tranonkala ity. Hiverena rehefa vita ny chat.\n5. Raha namorona CV vaovao ianao, amboary eto amin’ny endrika Microsoft Word. Afaka manao PDF koa ianao.",
    privacyPhone:
      "Amin’ny findrinao na ny solosainao no amboarina io rakitra io. Tsy hitanay izany. Tsy misy alefa any aminay. Raha hidiana ity pejy ity dia lasa ny lahatsoratra eo amin’ny efijery — ka alao ny rakitra tianao hotehirizina.",
    privacyChat:
      "Hampiasa chat maimaimpoana (Gemini na Claude) amin’ny pejy hafa ianao. Tsy izahay io chat io. Tsy tehirizinay ny anaranao, ny laharanao, na ny CV-nao.\n\nRaha hijanona ianao dia tohizo any aoriana, midira ka mampiasà chat tsotra azonao sokafana indray. Aza mampiasa chat vonjimaika na vahiny.",
    tileCv: "CV Launch",
    tileCvHint: "Mamorona CV vaovao, tohizo izay efa natomboka, na mahazo hevitra hanatsarana CV efa misy.",
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
    progressTitle: "Fandrosoana",
    learnWhy: "Nahoana",
    hideLearn: "Afenina",
    finishQ: "Ho vita izao ve ianao?",
    finishYes: "Eny — ho vita izao",
    finishNo: "Tsia — afaka mijanona aho ary tohizako any aoriana",
    finishYesHint: "Chat vonjimaika dia mety raha vita izao ary tsy hidianao.",
    finishNoHint: "Midira ary mampiasà chat tsotra azonao sokafana indray any aoriana. Aza mampiasa chat vonjimaika na vahiny.",
    pathQ: "Inona no tianao hatao?",
    pathHow:
      "Ahoana no fandehan’izany raha tsy mbola nanao izany ianao:\n\n1. Misafidiana safidy iray eto ambany.\n2. Ny pejy manaraka dia milaza izay hodikaina sy izay hametahana.\n3. Avelao misokatra ity pejy Career Launch Africa ity. Sokafy ny chat amin’ny pejy vaovao.\n4. Mametraka fanontaniana iray isaky ny fotoana ny chat. Soraty ny valiny ary alefaso.\n5. CV vaovao: rehefa miseho === CV START === ny chat, hiverena eto ary tsindrio Amboary ny CV amin’ny endrika Microsoft Word.\n6. Hanatsara na hampifanaraka: soso-kevitra ihany no omen’ny chat. Ianao no manova ny CV-nao. Tsy misy rakitra vaovao alaina eto.",
    pathCreate: "Manomboka CV vaovao",
    pathCreateHint:
      "Ampiasao ity raha tsy mbola manana CV ianao. Hanontany ny chat. Avy eo hiverena eto mba hamorona ny CV amin’ny endrika Microsoft Word. Afaka manao PDF koa ianao.",
    pathImprove: "Manatsara CV efa misy",
    pathImproveHint:
      "Soso-kevitra ihany. Apetaho ao amin’ny chat ny lahatsoratra CV anao ankehitriny. Ianao no manova ny rakitrao. Tsy hamorona rakitra Word na PDF vaovao amin’ity lalana ity izahay.",
    pathTailor: "Mampifanaraka ny CV amin’ny asa iray",
    pathTailorHint:
      "Soso-kevitra ho an’ny asa. Apetaho ny lahatsoratra CV-nao sy ny lahatsoratra asa ao amin’ny chat. Ianao no manova ny rakitrao. Tsy hamorona rakitra Word na PDF vaovao amin’ity lalana ity izahay.",
    pathContinue: "Hanohy ny famoronana",
    pathContinueHint:
      "Ampiasao ity raha efa nanomboka CV vaovao ianao ary naka rakitra fandrosoana. Hapetahinao ao amin’ny chat io rakitra io.",
    atsTitle: "Naoty solosaina mpampiasa (ATS) — mikendré mihoatra ny 80",
    atsBlurb:
      "Mpampiasa maro no mampiasa rindrambaiko (ATS) hamakiana CV alohan’ny olona. Hanome naoty tombana ny chat. Mikendré mihoatra ny 80. Tombana izany, tsy naoty ofisialy.",
    atsLearnBody:
      "ATS dia Applicant Tracking System. Rindrambaiko ampiasain’ny mpampiasa maro alohan’ny hamakiana ny CV. Mandeha tsara indrindra amin’ny rakitra Microsoft Word tsotsotra, tsanganana iray, lohateny mahazatra, daty mazava, ny tanànanao miampy finday na WhatsApp, ary teny avy amin’ny asa raha marina tokoa aminao. Sary, tabilao, tsanganana roa ary sary haingon-taratasy matetika tsy mandeha. Chat roa dia mety hanome isa samy hafa. Mahazatra izany. Mikendré mihoatra ny 80 alohan’ny hanaovana fangatahana.",
    keepTab:
      "Avelao misokatra ity pejy Career Launch Africa ity. Hiverina eto ianao. Aza hidiana. Rehefa sokafanao ny chat, avelao hisokatra amin’ny pejy vaovao.",
    loginFirst:
      "Raha milaza ny chat fa hiditra, midira aloha. Ny fidirana dia mety hamafa izay voadika. Hiverena amin’ity pejy ity ary tsindrio indray Adikao ny torolalana raha tsy miseho na inona na inona rehefa mametaka ianao.",
    copyWizard: "Adikao ny torolalana",
    copyTitle: "Adikao ny torolalana",
    copyHow:
      "Tsy mila vakina ny lahatsoratra lava. Tsindrio Adikao ny torolalana. Avy eo tsindrio Voadika — manaraka.",
    tipsTitle: "Vakio aloha ity",
    copiedGoNext: "Voadika — manaraka",
    showWizard: "Aseho ny torolalana (raha tsy nandeha ny fandikana)",
    progressAria: "Fandrosoana",
    copied: "Voadika. Tsindrio Voadika — manaraka. Avy eo sokafy ny chat ary apetaho.",
    copyFail:
      "Tsy voadika ho azy. Sokafy ny Aseho ny torolalana, tsindrio ela ny lahatsoratra, fidio Safidio daholo, dia Adikao.",
    recopyHint:
      "Raha tsy miseho na inona na inona rehefa mametaka ao amin’ny chat ianao, hiverena eto ary tsindrio indray Adikao ny torolalana. Tsy mila vakina ny lahatsoratra lava.",
    openFirst: "Sokafy ny chat ary apetaho",
    openHow:
      "1. Tsindrio Sokafy ny Gemini na Sokafy ny Claude eto ambany. Avelao misokatra ity pejy Career Launch Africa ity.\n2. Ao amin’ny chat, tsindrio ny boaty hafatra foana.\n3. Fametahana: amin’ny finday, tsindrio ela, dia Apetaho. Amin’ny solosaina, tsindrio Ctrl+V (Windows) na Cmd+V (Mac).\n4. Tsindrio Alefaso.\n5. Valio ny fanontaniana iray isaky ny fotoana. Rehefa vita, hiverena amin’ity pejy ity.",
    ifBusy: "Raha be olona io chat io, feno, na lany ny hafatra maimaimpoana",
    deepSeekOnly: "DeepSeek — raha efa niditra any ihany",
    readyCreateTitle: "Adikao ny torolalana, dia sokafy ny chat",
    readyImproveTitle: "Adikao ny torolalana, dia sokafy ny chat ho an’ny soso-kevitra",
    readyTailorTitle: "Adikao ny torolalana, dia sokafy ny chat ho an’ny asa",
    readyContinueTitle: "Hanohy ny famoronana — adikao ny torolalana, dia sokafy ny chat",
    readyContinueHelp:
      "Rehefa nisokatra ny chat:\n1. Apetaho ny torolalana ary alefaso.\n2. Apetaho ny lahatsoratra rehetra ao amin’ny rakitra fandrosoana ary alefaso.\nRaha efa nanontany ny chat, apetaho ny rakitra fandrosoana ho valiny.",
    readyReturnCreate:
      "Rehefa miseho ny chat ny andalana manomboka amin’ny === CV START === ary mifarana amin’ny === CV END ===, ataovy izao:\n\n1. Raha te hanova ianao, soraty ny 1 (Make adjustments) ao amin’ny chat.\n2. Rehefa vonona ny rakitra, soraty ny 2 (Create the CV in a Microsoft Word format).\n3. Adikao ny zavatra rehetra hatramin’ny === CV START === ka hatramin’ny === CV END ===, anisan’izany ireo andalana roa ireo.\n4. Hiverena amin’ity pejy Career Launch Africa ity.\n5. Sokafy ny Amboary ny CV amin’ny endrika Microsoft Word, apetaho ny andalana, dia tsindrio io bokotra io ihany. Afaka manao PDF koa ianao.",
    readyReturnSuggest:
      "Rehefa vita ny chat, manome soso-kevitra misy laharana izy. Sokafy ny rakitra CV-nao ary ataovy irery ireo fanovana. Ity lalana ity tsy mamorona rakitra Word na PDF vaovao.",
    readySaveHelp:
      "Mila mijanona alohan’ny vita ny CV? Ao amin’ny chat, soraty ny Save ary alefaso. Adikao ny andalana manomboka amin’ny === PROGRESS START ===. Hiverena eto, sokafy ny Tahirizo ny fandrosoana, apetaho, dia alaina ny rakitra amin’ity finday ity. Any aoriana fidio ny Hanohy ny famoronana.",
    makeWord: "Amboary ny CV amin’ny endrika Microsoft Word",
    makeWordLater: "Aorian’ny chat: Amboary ny CV amin’ny endrika Microsoft Word",
    saveProgressLink: "Tahirizo ny fandrosoana (raha mila mijanona)",
    secondOpinionTitle: "Tia tombana ATS hafa ve ianao?",
    secondOpinionHelp:
      "Adikao io lahatsoratra fohy io ao amin’ny chat hafa (ohatra Claude raha Gemini no nampiasainao). Avy eo apetaho ny CV-nao ho lahatsoratra. Aza ampidirina rakitra.",
    copySecondOpinion: "Adikao ny torolalana fanombanana faharoa",
    copiedSecond: "Voadika — apetaho ao amin’ny chat hafa, dia apetaho ny CV-nao ho lahatsoratra.",
    pasteOnly:
      "Ao amin’ny chat, apetaho fotsiny ny lahatsoratra. Aza ampidirina rakitra Word, PDF, na sary. Matetika tsy mandeha izany amin’ny kaonty maimaimpoana, na angatahina handoa. Mba handika CV na doka asa: sokafy, safidio ny lahatsoratra, adikao, dia apetaho ao amin’ny chat.",
    makeWordTitle: "Amboary ny CV amin’ny endrika Microsoft Word",
    makeWordHelp:
      "Tsy afaka mamorona rakitra Microsoft Word ny chat. Eto amin’ity pejy ity no amboarinao.\n\n1. Ao amin’ny chat, adikao ny zavatra rehetra hatramin’ny === CV START === ka hatramin’ny === CV END === (anisan’izany ireo andalana roa).\n2. Apetaho ao amin’ny boaty lehibe eto ambany.\n3. Tsindrio Amboary ny CV amin’ny endrika Microsoft Word. Mitahiry amin’ity finday na solosaina ity ny rakitra. Azonao sokafana amin’ny Microsoft Word na Google Docs.\n4. Raha te hanao PDF koa, tsindrio Amboary ny CV amin’ny endrika PDF.",
    pasteLabel: "Apetaho eto ny andalana CV",
    pasteHow:
      "Ny andalana voalohany dia tokony ho === CV START ===. Ny andalana farany dia tokony ho === CV END ===. Raha foana ny fametahana, hiverena amin’ny chat, adikao indray, dia apetaho eto.",
    pastePlaceholder: "=== CV START ===\n...\n=== CV END ===",
    downloadWord: "Amboary ny CV amin’ny endrika Microsoft Word",
    downloadPdf: "Amboary ny CV amin’ny endrika PDF",
    parseError:
      "Tsy voavaky ny CV ao amin’io boaty io. Apetaho ny lahatsoratra avy amin’ny chat. Tokony ahitana === CV START === sy === CV END ===, na andalana toa ny FULL_NAME:.",
    parseReady: "Vonona hamorona rakitra Microsoft Word ho an’i {name}.",
    pdfFail: "Tsy vita ny PDF. Andramo ny endrika Microsoft Word, na havaozy ity pejy ity.",
    pasteProgressLabel: "Apetaho eto ny andalana fandrosoana",
    builtLocal: "Amin’ity findrinao na solosainao ity no amboarina ny rakitra. Tsy hitanay izany.",
    wizardV: "CV Launch v1.1 — Septambra 2026",
    agentGemini: "Gemini",
    agentClaude: "Claude",
    agentDeepSeek: "DeepSeek",
    claudeWait:
      "Raha milaza ny Claude fa miandry: aza mandoa. Aza manomboka chat vaovao. Hiverena amin’io chat io any aoriana. Na sokafy ny Gemini: hiverena amin’ity pejy Career Launch Africa ity, adikao indray ny torolalana, dia apetaho.",
    langAria: "Fitenin’ny tranonkala",
    saveProgressTitle: "Tahirizo ny fandrosoanao",
    saveProgressHelp:
      "Ampiasao ity raha mila mijanona ianao alohan’ny vita ny CV.\n\n1. Ao amin’ny chat, soraty ny Save ary alefaso.\n2. Adikao ny zavatra rehetra hatramin’ny === PROGRESS START === ka hatramin’ny === PROGRESS END === (anisan’izany ireo andalana roa).\n3. Apetaho ao amin’ny boaty lehibe eto ambany.\n4. Tsindrio Alaina ny rakitra fandrosoana. Mitahiry amin’ity finday na solosaina ity ny rakitra.\n5. Any aoriana, sokafy ny CV Launch ary fidio ny Hanohy ny famoronana. Apetaho ny torolalana vaovao ao amin’ny chat, avy eo apetaho ity rakitra fandrosoana ity.",
    downloadProgress: "Alaina ny rakitra fandrosoana",
    progressError:
      "Tsy voavaky ny rakitra fandrosoana. Apetaho ny andalana avy amin’ny chat. Tsy maintsy ahitana === PROGRESS START === sy === PROGRESS END ===.",
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
