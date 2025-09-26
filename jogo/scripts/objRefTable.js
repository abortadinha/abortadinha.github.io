const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.sliderbar,
		C3.Plugins.Sprite,
		C3.Behaviors.Rotate,
		C3.Plugins.TextBox,
		C3.Behaviors.Platform,
		C3.Behaviors.Physics,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Behaviors.Rotate.Acts.SetSpeed,
		C3.Plugins.System.Exps.int,
		C3.Plugins.TextBox.Exps.Text,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.sliderbar.Exps.Value
	];
};
self.C3_JsPropNameTable = [
	{BarraDeslizante: 0},
	{Girar: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{EntradaDeTexto: 0},
	{Plataforma: 0},
	{Física: 0},
	{ArrastarSoltar: 0},
	{CentrarEm: 0},
	{Sprite3: 0},
	{Sólido: 0},
	{Sprite4: 0},
	{Sprite5: 0}
];

self.InstanceType = {
	BarraDeslizante: class extends self.ISliderBarInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	EntradaDeTexto: class extends self.ITextInputInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {}
}