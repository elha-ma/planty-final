document.addEventListener("DOMContentLoaded", function(){ 				window.addEventListener( 'DOMContentLoaded', function() {
					const scope = document.querySelector( '.uagb-block-bf81ec76' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'spectra-image-gallery__layout--masonry' ) ) {
							const element = scope.querySelector( '.spectra-image-gallery__layout--masonry' );
							const isotope = new Isotope( element, {
								itemSelector: '.spectra-image-gallery__media-wrapper--isotope',
							} );
							imagesLoaded( element ).on( 'progress', function() {
								isotope.layout();
							});
						}
						UAGBImageGalleryMasonry.init( {"block_id":"bf81ec76","classMigrate":true,"readyToRender":true,"tileSize":0,"focusList":[null,null,null,null,null,null,null,null,null,null,null,null,false,false,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,false,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,false],"mediaGallery":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/planty.local\/wp-content\/uploads\/2023\/01\/jeremy-bezanger-0QgbyZdhX7k-unsplash-1-150x150.png","orientation":"landscape"},"medium":{"height":200,"width":300,"url":"http:\/\/planty.local\/wp-content\/uploads\/2023\/01\/jeremy-bezanger-0QgbyZdhX7k-unsplash-1-300x200.png","orientation":"landscape"},"full":{"url":"http:\/\/planty.local\/wp-content\/uploads\/2023\/01\/jeremy-bezanger-0QgbyZdhX7k-unsplash-1.png","height":262,"width":393,"orientation":"landscape"}},"mime":"image\/png","type":"image","subtype":"png","id":222,"url":"http:\/\/planty.local\/wp-content\/uploads\/2023\/01\/jeremy-bezanger-0QgbyZdhX7k-unsplash-1.png","alt":"","link":"http:\/\/planty.local\/?attachment_id=222","caption":"FRAISE"},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/planty.local\/wp-content\/uploads\/2022\/12\/estudio-bloom-tOitjphtIXU-unsplash-1-150x150.png","orientation":"landscape"},"medium":{"height":200,"width":300,"url":"http:\/\/planty.local\/wp-content\/uploads\/2022\/12\/estudio-bloom-tOitjphtIXU-unsplash-1-300x200.png","orientation":"landscape"},"full":{"url":"http:\/\/planty.local\/wp-content\/uploads\/2022\/12\/estudio-bloom-tOitjphtIXU-unsplash-1.png","height":263,"width":394,"orientation":"landscape"}},"mime":"image\/png","type":"image","subtype":"png","id":13,"url":"http:\/\/planty.local\/wp-content\/uploads\/2022\/12\/estudio-bloom-tOitjphtIXU-unsplash-1.png","alt":"","link":"http:\/\/planty.local\/estudio-bloom-toitjphtixu-unsplash-1\/","caption":"PAMPLEMOUSSE"},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/planty.local\/wp-content\/uploads\/2022\/12\/rodion-kutsaev-4k8xEFW4_3Q-unsplash-1-150x150.png","orientation":"landscape"},"medium":{"height":200,"width":300,"url":"http:\/\/planty.local\/wp-content\/uploads\/2022\/12\/rodion-kutsaev-4k8xEFW4_3Q-unsplash-1-300x200.png","orientation":"landscape"},"full":{"url":"http:\/\/planty.local\/wp-content\/uploads\/2022\/12\/rodion-kutsaev-4k8xEFW4_3Q-unsplash-1.png","height":262,"width":393,"orientation":"landscape"}},"mime":"image\/png","type":"image","subtype":"png","id":38,"url":"http:\/\/planty.local\/wp-content\/uploads\/2022\/12\/rodion-kutsaev-4k8xEFW4_3Q-unsplash-1.png","alt":"","link":"http:\/\/planty.local\/rodion-kutsaev-4k8xefw4_3q-unsplash-1\/","caption":"FRAMBOISE"},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/planty.local\/wp-content\/uploads\/2022\/12\/estudio-bloom-ezqnxsqUZ80-unsplash-1-150x150.png","orientation":"landscape"},"medium":{"height":200,"width":300,"url":"http:\/\/planty.local\/wp-content\/uploads\/2022\/12\/estudio-bloom-ezqnxsqUZ80-unsplash-1-300x200.png","orientation":"landscape"},"full":{"url":"http:\/\/planty.local\/wp-content\/uploads\/2022\/12\/estudio-bloom-ezqnxsqUZ80-unsplash-1.png","height":262,"width":393,"orientation":"landscape"}},"mime":"image\/png","type":"image","subtype":"png","id":12,"url":"http:\/\/planty.local\/wp-content\/uploads\/2022\/12\/estudio-bloom-ezqnxsqUZ80-unsplash-1.png","alt":"","link":"http:\/\/planty.local\/estudio-bloom-ezqnxsquz80-unsplash-1\/","caption":"CITRON"}],"mediaIDs":[222,13,38,12],"feedLayout":"masonry","imageDisplayCaption":true,"captionVisibility":"always","captionDisplayType":"overlay","imageCaptionAlignment":"center center","imageCaptionAlignment01":"center","imageCaptionAlignment02":"center","imageDefaultCaption":"","captionPaddingTop":8,"captionPaddingRight":8,"captionPaddingBottom":8,"captionPaddingLeft":8,"captionPaddingTopTab":8,"captionPaddingRightTab":8,"captionPaddingBottomTab":8,"captionPaddingLeftTab":8,"captionPaddingTopMob":8,"captionPaddingRightMob":8,"captionPaddingBottomMob":8,"captionPaddingLeftMob":8,"captionPaddingUnit":"px","captionPaddingUnitTab":"px","captionPaddingUnitMob":"px","captionPaddingUnitLink":true,"captionGap":0,"captionGapUnit":"px","columnsDesk":2,"columnsTab":3,"columnsMob":2,"gridImageGap":2,"gridImageGapTab":"","gridImageGapMob":"","gridImageGapUnit":"em","gridImageGapUnitTab":"px","gridImageGapUnitMob":"px","feedMarginTop":"","feedMarginRight":"","feedMarginBottom":"","feedMarginLeft":"","feedMarginTopTab":"","feedMarginRightTab":"","feedMarginBottomTab":"","feedMarginLeftTab":"","feedMarginTopMob":"","feedMarginRightMob":"","feedMarginBottomMob":"","feedMarginLeftMob":"","feedMarginUnit":"px","feedMarginUnitTab":"px","feedMarginUnitMob":"px","feedMarginUnitLink":true,"carouselStartAt":0,"carouselSquares":false,"carouselLoop":true,"carouselAutoplay":true,"carouselAutoplaySpeed":2000,"carouselPauseOnHover":true,"carouselTransitionSpeed":500,"gridPages":1,"gridPageNumber":1,"feedPagination":false,"paginateUseArrows":true,"paginateUseDots":true,"paginateUseLoader":false,"paginateLimit":9,"paginateButtonAlign":"center","paginateButtonText":"Charger plus d\u2019images","paginateButtonPaddingTop":"","paginateButtonPaddingRight":"","paginateButtonPaddingBottom":"","paginateButtonPaddingLeft":"","paginateButtonPaddingTopTab":"","paginateButtonPaddingRightTab":"","paginateButtonPaddingBottomTab":"","paginateButtonPaddingLeftTab":"","paginateButtonPaddingTopMob":"","paginateButtonPaddingRightMob":"","paginateButtonPaddingBottomMob":"","paginateButtonPaddingLeftMob":"","paginateButtonPaddingUnit":"px","paginateButtonPaddingUnitTab":"px","paginateButtonPaddingUnitMob":"px","paginateButtonPaddingUnitLink":true,"imageEnableZoom":false,"imageZoomType":"zoom-in","captionBackgroundEnableBlur":false,"captionBackgroundBlurAmount":0,"captionBackgroundBlurAmountHover":5,"captionLoadGoogleFonts":false,"captionFontFamily":"Default","captionFontWeight":"900","captionFontStyle":"normal","captionTransform":"","captionDecoration":"none","captionFontSizeType":"em","captionFontSize":5,"captionFontSizeTab":"","captionFontSizeMob":"","captionLineHeightType":"em","captionLineHeight":"","captionLineHeightTab":"","captionLineHeightMob":"","loadMoreLoadGoogleFonts":false,"loadMoreFontFamily":"Default","loadMoreFontWeight":"","loadMoreFontStyle":"normal","loadMoreTransform":"","loadMoreDecoration":"none","loadMoreFontSizeType":"px","loadMoreFontSize":"","loadMoreFontSizeTab":"","loadMoreFontSizeMob":"","loadMoreLineHeightType":"em","loadMoreLineHeight":"","loadMoreLineHeightTab":"","loadMoreLineHeightMob":"","captionBackgroundEffect":"none","captionBackgroundEffectHover":"none","captionBackgroundEffectAmount":100,"captionBackgroundEffectAmountHover":0,"captionColor":"#ffffff","captionColorHover":"rgba(255,255,255,1)","captionBackgroundColor":"","captionBackgroundColorHover":"","overlayColor":"rgba(0,0,0,0)","overlayColorHover":"rgba(0,0,0,0)","captionSeparateColors":true,"paginateArrowDistance":-24,"paginateArrowDistanceUnit":"px","paginateArrowSize":24,"paginateDotDistance":8,"paginateDotDistanceUnit":"px","paginateLoaderSize":18,"paginateButtonTextColor":"","paginateButtonTextColorHover":"","paginateColor":"","paginateColorHover":"","imageBoxShadowColor":"","imageBoxShadowHOffset":0,"imageBoxShadowVOffset":0,"imageBoxShadowBlur":"","imageBoxShadowSpread":"","imageBoxShadowPosition":"outset","imageBoxShadowColorHover":"","imageBoxShadowHOffsetHover":0,"imageBoxShadowVOffsetHover":0,"imageBoxShadowBlurHover":"","imageBoxShadowSpreadHover":"","imageBoxShadowPositionHover":"outset","arrowBorderTopWidth":4,"arrowBorderLeftWidth":4,"arrowBorderRightWidth":4,"arrowBorderBottomWidth":4,"arrowBorderTopLeftRadius":50,"arrowBorderTopRightRadius":50,"arrowBorderBottomLeftRadius":50,"arrowBorderBottomRightRadius":50,"arrowBorderRadiusUnit":"px","arrowBorderTopWidthTablet":"","arrowBorderLeftWidthTablet":"","arrowBorderRightWidthTablet":"","arrowBorderBottomWidthTablet":"","arrowBorderTopLeftRadiusTablet":"","arrowBorderTopRightRadiusTablet":"","arrowBorderBottomLeftRadiusTablet":"","arrowBorderBottomRightRadiusTablet":"","arrowBorderRadiusUnitTablet":"px","arrowBorderTopWidthMobile":"","arrowBorderLeftWidthMobile":"","arrowBorderRightWidthMobile":"","arrowBorderBottomWidthMobile":"","arrowBorderTopLeftRadiusMobile":"","arrowBorderTopRightRadiusMobile":"","arrowBorderBottomLeftRadiusMobile":"","arrowBorderBottomRightRadiusMobile":"","arrowBorderRadiusUnitMobile":"px","arrowBorderStyle":"none","arrowBorderColor":"","arrowBorderHColor":"","btnBorderTopWidth":"","btnBorderLeftWidth":"","btnBorderRightWidth":"","btnBorderBottomWidth":"","btnBorderTopLeftRadius":"","btnBorderTopRightRadius":"","btnBorderBottomLeftRadius":"","btnBorderBottomRightRadius":"","btnBorderRadiusUnit":"px","btnBorderTopWidthTablet":"","btnBorderLeftWidthTablet":"","btnBorderRightWidthTablet":"","btnBorderBottomWidthTablet":"","btnBorderTopLeftRadiusTablet":"","btnBorderTopRightRadiusTablet":"","btnBorderBottomLeftRadiusTablet":"","btnBorderBottomRightRadiusTablet":"","btnBorderRadiusUnitTablet":"px","btnBorderTopWidthMobile":"","btnBorderLeftWidthMobile":"","btnBorderRightWidthMobile":"","btnBorderBottomWidthMobile":"","btnBorderTopLeftRadiusMobile":"","btnBorderTopRightRadiusMobile":"","btnBorderBottomLeftRadiusMobile":"","btnBorderBottomRightRadiusMobile":"","btnBorderRadiusUnitMobile":"px","btnBorderStyle":"","btnBorderColor":"","btnBorderHColor":"","imageBorderTopWidth":"","imageBorderLeftWidth":"","imageBorderRightWidth":"","imageBorderBottomWidth":"","imageBorderTopLeftRadius":"","imageBorderTopRightRadius":"","imageBorderBottomLeftRadius":"","imageBorderBottomRightRadius":"","imageBorderRadiusUnit":"px","imageBorderTopWidthTablet":"","imageBorderLeftWidthTablet":"","imageBorderRightWidthTablet":"","imageBorderBottomWidthTablet":"","imageBorderTopLeftRadiusTablet":"","imageBorderTopRightRadiusTablet":"","imageBorderBottomLeftRadiusTablet":"","imageBorderBottomRightRadiusTablet":"","imageBorderRadiusUnitTablet":"px","imageBorderTopWidthMobile":"","imageBorderLeftWidthMobile":"","imageBorderRightWidthMobile":"","imageBorderBottomWidthMobile":"","imageBorderTopLeftRadiusMobile":"","imageBorderTopRightRadiusMobile":"","imageBorderBottomLeftRadiusMobile":"","imageBorderBottomRightRadiusMobile":"","imageBorderRadiusUnitMobile":"px","imageBorderStyle":"","imageBorderColor":"","imageBorderHColor":"","mainTitleBorderTopWidth":2,"mainTitleBorderLeftWidth":0,"mainTitleBorderRightWidth":0,"mainTitleBorderBottomWidth":2,"mainTitleBorderTopLeftRadius":"","mainTitleBorderTopRightRadius":"","mainTitleBorderBottomLeftRadius":"","mainTitleBorderBottomRightRadius":"","mainTitleBorderRadiusUnit":"px","mainTitleBorderTopWidthTablet":"","mainTitleBorderLeftWidthTablet":"","mainTitleBorderRightWidthTablet":"","mainTitleBorderBottomWidthTablet":"","mainTitleBorderTopLeftRadiusTablet":"","mainTitleBorderTopRightRadiusTablet":"","mainTitleBorderBottomLeftRadiusTablet":"","mainTitleBorderBottomRightRadiusTablet":"","mainTitleBorderRadiusUnitTablet":"px","mainTitleBorderTopWidthMobile":"","mainTitleBorderLeftWidthMobile":"","mainTitleBorderRightWidthMobile":"","mainTitleBorderBottomWidthMobile":"","mainTitleBorderTopLeftRadiusMobile":"","mainTitleBorderTopRightRadiusMobile":"","mainTitleBorderBottomLeftRadiusMobile":"","mainTitleBorderBottomRightRadiusMobile":"","mainTitleBorderRadiusUnitMobile":"px","mainTitleBorderStyle":"","mainTitleBorderColor":"","mainTitleBorderHColor":""}, '.uagb-block-bf81ec76' );
					}
				});
			 })