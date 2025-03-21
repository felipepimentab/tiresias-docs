# Guia de Estudo para Novatos

Bem-vindo ao Projeto Tiresias! Este guia foi elaborado para auxiliá-lo a adquirir conhecimentos fundamentais para colaboração no projeto. A seguir, você encontrará materiais de estudo recomendados para cada área.

## Audiologia

O primeiro passo é entender os conceitos de audilogia que norteiam o funcionamento de um aparelho auditivo, isto é:

- Como funciona o ouvido humano;
- Como a perda auditiva prejudica esse funcionamento;
- Como aparelhos auditivos atuam para mitigar esses efeitos e melhorar a qualidade de vida dos usuários.

Embora os recursos apresentados no final deste guia sejam excelentes e bem completos, eles podem ser um pouco complexos para serem bem aproveitados em um primeiro contato com o tema. Por isso, recomendamos como ponto de partida as aulas do Dr. Ted Venema no canal [Ear Health Canada](https://youtube.com/@earhealthcanada9972), no YouTube. O canal possui apenas 16 vídeos de até 15 minutos cada. Recomendamos que se assista a todos, pois a excelente didática do Dr. Ted tornam mais fácil a compreensão dos conceitos fundamentais de audilogia que são abordados mais a fundo nos demais recursos.

## Áudio digital

Áudio digital é uma área que possui um oceano de conteúdo devido a sua extensa variedade de aplicações. Ao mesmo tempo em que isso aumenta a disponibilidade de conteúdos, também pode ser um pouco desorientante para alguém que esteja começando do básico. Nesse sentido, recomendamos o canal no YouTube do [Akash Murthy](https://youtube.com/@akashmurthy), especialmente as playlists [Digital Audio Fundamentals](https://youtube.com/playlist?list=PLbqhA-NKGP6B6V_AiS-jbvSzdd7nbwwCw) e [Loudness and Level](https://youtube.com/playlist?list=PLbqhA-NKGP6DAkB4eYDsnNMQh9a9nvQh9). Akash possui uma didática excepcional, abordando conceitos complexos de maneira simples e objetiva, sempre acompanhando-os com ilustrações, animações visuais ou amostras de áudio para que até mesmo espectadores sem nenhum *background* em áudio digital consigam entender.

## Ferramentas

### Nordic nRF5340

O componente principal utilizado no projeto Tiresias é o [nRF5340](https://www.nordicsemi.com/Products/nRF5340), da Nordic Semiconductor. Trata-se de um *System-on-Chip* (SoC) projetado para aplicações IoT complexas, com alta capacidade de processamento e conectividade *Bluetooth Low Energy* (BLE). No projeto, ele atua como principal processador, controlando e integrando os demais componentes.

A melhor forma de se familiarizar com este componente e com seu ambiente de desenvolvimento (**nRF Connect SDK**) é através dos cursos disponibilizados na plataforma da própria fabricante, a [Nordic Developer Academy](https://academy.nordicsemi.com). Recomendamos a conclusão dos seguintes cursos:

- **nRF Connect SDK Fundamentals**;
- **nRF Bluetooth Low Energy Fundamentals**; e
- **nRF Connect SDK Intermediate**.

Os cursos oferecem exemplos e exercícios práticos fundamentais para a consolidação dos conhecimentos adiquiridos.

### Codec de áudio ADAU1787

O processamento de áudio no projeto é feito pelo codec de áudio [ADAU1787](https://www.analog.com/en/products/adau1787.html), da Analog Devices. O codec é programado visualmente através do [SigmaStudio](https://www.analog.com/en/resources/evaluation-hardware-and-software/software/ss_sigst_02.html) (não é o SigmaStudio+). Para familiarização com o SigmaStudio recomendamos o canal no YouTube do [David Thibodeau](https://youtube.com/@howtosigmadsp?si=6SSF2Q-i40_qDEDy), um engenheiro da Analog Devices e amante de música e áudio.

## Outros recursos

### Links úteis

- [OpenMHA](https://www.openmha.org)
- [Zephyr RTOS](https://docs.zephyrproject.org)

#### Repositórios

- [Hardware](https://github.com/joaocolombari/Tiresias_HW)
- [Software](https://github.com/felipepimentab/tiresias-fw)

#### Nordic nRF5340 (e nRF5340 Audio DK)

- [Datasheet nRF5340](https://docs-be.nordicsemi.com/bundle/ps_nrf5340/page/nRF5340_PS_v1.6.pdf?_LANG=enus)
- [Documentação nRF5340](https://docs.nordicsemi.com/category/nrf5340-category)
- [Fórum de dúvidas da Nordic](https://devzone.nordicsemi.com)
- [Página do produto nRF5340 Audio DK](https://www.nordicsemi.com/Products/Development-hardware/nRF5340-Audio-DK)
- [Guia de usuário nRF5340 Audio DK](https://docs-be.nordicsemi.com/bundle/ug_nrf5340_audio/attach/nRF5340_Audio_UG_v1.0.0.pdf?_LANG=enus)

#### Codec de áudio ADAU1787 e SigmaStudio

- [Datasheet ADAU1787](https://www.analog.com/media/en/technical-documentation/data-sheets/ADAU1787.pdf)
- [Fórum de dúvidas da Analog Devices](https://ez.analog.com)
- [Guia do usuário EVAL ADAU1787](https://www.analog.com/media/en/technical-documentation/user-guides/eval-adau1787z-ug-1532.pdf)
- [Download SigmaStudio](https://www.analog.com/en/resources/evaluation-hardware-and-software/software/ss_sigst_02.html#software-overview)
