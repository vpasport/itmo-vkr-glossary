package internal

type Node struct {
	Id       string   `json:"id,omitempty"`
	Type     string   `json:"type,omitempty"`
	Data     NodeData `json:"data,omitempty"`
	Position Position `json:"position,omitempty"`
}

type NodeData struct {
	Term         string `json:"term,omitempty"`
	Meaning      string `json:"meaning,omitempty"`
	BottomSource bool   `json:"bottomSource,omitempty"`
	TopSource    bool   `json:"topSource,omitempty"`
}

type Position struct {
	X float64 `json:"x"`
	Y float64 `json:"y"`
}

type Edge struct {
	Id        string `json:"id,omitempty"`
	Source    string `json:"source,omitempty"`
	Target    string `json:"target,omitempty"`
	ClassName string `json:"className,omitempty"`
}

const (
	EdgeClassName string = "normal-edge"
	DataRedisKey  string = "all-term-data"
)

type AllData struct {
	Nodes []Node `json:"nodes,omitempty"`
	Edges []Edge `json:"edges,omitempty"`
}
